import { Keyring } from '@polkadot/api';
import { createType, TypeRegistry } from '@polkadot/types';
import { TRANSACTION_VERSION } from '@polkadot/types/extrinsic/v4/Extrinsic';
import { cryptoWaitReady } from '@polkadot/util-crypto';

import {
  createSignedTx,
  createSigningPayload,
  decode,
  deriveAddress,
  getTxHash,
  KeyringPair,
  methods
} from '../src';

/**
 * We're on a generic Substrate chain, default SS58 prefix is 42.
 */
const DEV_CHAIN_SS58_FORMAT = 42;

/**
 * Send a JSONRPC request to the node at http://localhost:9933.
 *
 * @param method - The JSONRPC request method.
 * @param params - The JSONRPC request params.
 */
function rpcToNode(method: string, params: any[] = []): Promise<any> {
  return fetch('http://localhost:9933', {
    body: JSON.stringify({
      id: 1,
      jsonrpc: '2.0',
      method,
      params
    }),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })
    .then(response => response.json())
    .then(({ error, result }) => {
      if (error) {
        throw new Error(error.message);
      }

      return result;
    });
}

/**
 * Signing function. Implement this on the OFFLINE signing device.
 *
 * @param pair - The signing pair.
 * @param signingPayload - Payload to sign.
 */
function signWith(
  registry: TypeRegistry,
  pair: KeyringPair,
  signingPayload: string
): string {
  const { signature } = createType(
    registry,
    'ExtrinsicPayload',
    signingPayload,
    {
      version: TRANSACTION_VERSION
    }
  ).sign(pair);

  return signature;
}

/**
 * Entry point of the script.
 */
async function main(): Promise<void> {
  const registry = new TypeRegistry();

  // Wait for the promise to resolve async WASM
  await cryptoWaitReady();
  // Create a new keyring, and add an "Alice" account
  const keyring = new Keyring();
  const alice = keyring.addFromUri('//Alice', { name: 'Alice' }, 'sr25519');
  console.log(
    'SS58-Encoded Address:',
    deriveAddress(alice.publicKey, DEV_CHAIN_SS58_FORMAT)
  );

  // Construct a balance transfer transaction offline.
  // To construct the tx, we need some up-to-date information from the node.
  // `txwrapper` is offline-only, so does not care how you retrieve this info.
  // In this tutorial, we simply send RPC requests to the node.
  const { block } = await rpcToNode('chain_getBlock');
  const blockHash = await rpcToNode('chain_getBlockHash');
  const genesisHash = await rpcToNode('chain_getBlockHash', [0]);
  const metadataRpc = await rpcToNode('state_getMetadata');
  const { specVersion } = await rpcToNode('state_getRuntimeVersion');

  // Now we can create our `balances.transfer` unsigned tx. The following
  // function takes the above data as arguments, so can be performed offline
  // if desired.
  const unsigned = methods.balances.transfer(
    {
      value: 12,
      dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty' // Bob
    },
    {
      address: deriveAddress(alice.publicKey, 42),
      blockHash,
      blockNumber: createType(
        registry,
        'BlockNumber',
        block.header.number
      ).toNumber(),
      genesisHash,
      metadataRpc,
      nonce: 4, // Assuming this is Alice's first tx on the chain
      specVersion,
      tip: 0,
      validityPeriod: 240
    }
  );

  // Decode an unsigned transaction.
  const decodedUnsigned = decode(unsigned, {
    metadata: metadataRpc,
    registry,
    ss58Format: DEV_CHAIN_SS58_FORMAT
  });
  console.log(
    `\nDecoded Transaction\n  To: ${decodedUnsigned.method.args.dest}\n` +
    `  Amount: ${decodedUnsigned.method.args.value}`
  );

  // Construct the signing payload from an unsigned transaction.
  const signingPayload = createSigningPayload(unsigned);
  console.log(`\nPayload to Sign: ${signingPayload}`);

  // Decode the information from a signing payload.
  const payloadInfo = decode(signingPayload, {
    metadata: metadataRpc,
    registry,
    ss58Format: DEV_CHAIN_SS58_FORMAT
  });
  console.log(
    `\nDecoded Transaction\n  To: ${payloadInfo.method.args.dest}\n` +
    `  Amount: ${payloadInfo.method.args.value}`
  );

  // Sign a payload. This operation should be performed on an offline device.
  const signature = signWith(registry, alice, signingPayload);
  console.log(`\nSignature: ${signature}`);

  // Serialize a signed transaction.
  const tx = createSignedTx(unsigned, signature);
  console.log(`\nTransaction to Submit: ${tx}`);

  // Derive the tx hash of a signed transaction offline.
  const exptectedTxHash = getTxHash(tx);
  console.log(`\nExpected Tx Hash: ${exptectedTxHash}`);

  // Send the tx to the node. Again, since `txwrapper` is offline-only, this
  // operation should be handled externally. Here, we just send a JSONRPC
  // request directly to the node.
  const actualTxHash = await rpcToNode('author_submitExtrinsic', [
    '0x2c0284d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d01b852f11be1b4d63f772f34cce3c70e0f5b7ef90e938d2cfb5c603a5c9f6b3b36caa600430e1fb6b3447362ef70d703070a05ee4fc692181626f72cbc3667148cf50304000400ff8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4830'
  ]);
  console.log(`\nActual Tx Hash: ${actualTxHash}`);

  // Decode a signed payload.
  const txInfo = decode(tx, {
    metadata: metadataRpc,
    registry,
    ss58Format: DEV_CHAIN_SS58_FORMAT
  });
  console.log(
    `\nDecoded Transaction\n  To: ${txInfo.method.args.dest}\n` +
    `  Amount: ${txInfo.method.args.value}\n`
  );
}

main().catch(error => console.error(error));

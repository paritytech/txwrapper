import { Keyring } from '@polkadot/api';
import { TypeRegistry } from '@polkadot/types';
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
  const { signature } = registry
    .createType('ExtrinsicPayload', signingPayload, {
      version: TRANSACTION_VERSION
    })
    .sign(pair);

  return signature;
}

/**
 * Entry point of the script.
 */
async function main(): Promise<void> {
  // If you're using your own chain with custom types, add these types here. We
  // are using a vanilla Substrate chain, so no type overriding is needed.
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
      blockNumber: registry
        .createType('BlockNumber', block.header.number)
        .toNumber(),
      genesisHash,
      metadataRpc,
      nonce: 1, // Assuming this is Alice's first tx on the chain
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
  const signingPayload = createSigningPayload(unsigned, { registry });
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
  const tx = createSignedTx(unsigned, signature, { registry });
  console.log(`\nTransaction to Submit: ${tx}`);

  // Derive the tx hash of a signed transaction offline.
  const exptectedTxHash = getTxHash(tx);
  console.log(`\nExpected Tx Hash: ${exptectedTxHash}`);

  // Send the tx to the node. Again, since `txwrapper` is offline-only, this
  // operation should be handled externally. Here, we just send a JSONRPC
  // request directly to the node.
  const actualTxHash = await rpcToNode('author_submitExtrinsic', [tx]);
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

/**
 * @ignore Don't show this file in documentation.
 */ /** */

import { Keyring } from '@polkadot/api';
import { cryptoWaitReady } from '@polkadot/util-crypto';

import {
  createSignedTx,
  createSigningPayload,
  decode,
  deriveAddress,
  getRegistry,
  getTxHash,
  methods,
  POLKADOT_SS58_FORMAT,
} from '../../src';
import { rpcToNode, signWith } from '../util';
/**
 * Entry point of the script. This script assumes a Polkadot node is running
 * locally on `http://localhost:9933`.
 */
async function main(): Promise<void> {
  // Wait for the promise to resolve async WASM
  await cryptoWaitReady();
  // Create a new keyring, and add an "Alice" account
  const keyring = new Keyring();
  const alice = keyring.addFromUri('//Alice', { name: 'Alice' }, 'sr25519');
  console.log(
    "Alice's SS58-Encoded Address:",
    deriveAddress(alice.publicKey, POLKADOT_SS58_FORMAT)
  );

  // Construct a proxy removeProxies transaction offline.
  // To construct the tx, we need some up-to-date information from the node.
  // `txwrapper` is offline-only, so does not care how you retrieve this info.
  // In this tutorial, we simply send RPC requests to the node.
  const { block } = await rpcToNode('chain_getBlock');
  const blockHash = await rpcToNode('chain_getBlockHash');
  const genesisHash = await rpcToNode('chain_getBlockHash', [0]);
  const metadataRpc = await rpcToNode('state_getMetadata');
  const { specVersion, transactionVersion } = await rpcToNode(
    'state_getRuntimeVersion'
  );

  // Create Polkadot's type registry.
  const registry = getRegistry(
    'Polkadot CC1',
    'polkadot',
    specVersion,
    metadataRpc
  );

  // Alice removing bob as her proxy
  const unsigned = methods.proxy.removeProxies(
    {},
    {
      address: deriveAddress(alice.publicKey, POLKADOT_SS58_FORMAT),
      blockHash,
      blockNumber: registry
        .createType('BlockNumber', block.header.number)
        .toNumber(),
      eraPeriod: 64,
      genesisHash,
      metadataRpc,
      nonce: 1, // Remember to change
      specVersion,
      tip: 0,
      transactionVersion,
    },
    {
      metadataRpc,
      registry,
    }
  );

  // Decode an unsigned transaction.
  const decodedUnsigned = decode(unsigned, {
    metadataRpc,
    registry,
  });
  console.log(
    `\nDecoded Transaction\n  Proxy: ${decodedUnsigned.method.args.proxy}\n` +
      `  Proxy Type: ${decodedUnsigned.method.args.proxyType}`
  );

  // Construct the signing payload from an unsigned transaction.
  const signingPayload = createSigningPayload(unsigned, { registry });
  console.log(`\nPayload to Sign: ${signingPayload}`);

  // Decode the information from a signing payload.
  const payloadInfo = decode(signingPayload, {
    metadataRpc,
    registry,
  });
  console.log(
    `\nDecoded Transaction\n  Proxy: ${payloadInfo.method.args.proxy}\n` +
      `  Proxy Type: ${payloadInfo.method.args.proxyType}`
  );

  // Sign a payload. This operation should be performed on an offline device.
  const signature = signWith(alice, signingPayload, {
    metadataRpc,
    registry,
  });
  console.log(`\nSignature: ${signature}`);

  // Serialize a signed transaction.
  const tx = createSignedTx(unsigned, signature, { metadataRpc, registry });
  console.log(`\nTransaction to Submit: ${tx}`);

  // Derive the tx hash of a signed transaction offline.
  const expectedTxHash = getTxHash(tx);
  console.log(`\nExpected Tx Hash: ${expectedTxHash}`);

  // Send the tx to the node. Again, since `txwrapper` is offline-only, this
  // operation should be handled externally. Here, we just send a JSONRPC
  // request directly to the node.
  const actualTxHash = await rpcToNode('author_submitExtrinsic', [tx]);
  console.log(`Actual Tx Hash: ${actualTxHash}`);

  // Decode a signed payload.
  const txInfo = decode(tx, {
    metadataRpc,
    registry,
  });
  console.log(
    `\nDecoded Transaction\n  Proxy: ${txInfo.method.args.proxy}\n` +
      `  Proxy Type: ${txInfo.method.args.proxyType}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

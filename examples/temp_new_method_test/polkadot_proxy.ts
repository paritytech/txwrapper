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
  const bob = keyring.addFromUri('//Bob', { name: 'Bob' }, 'sr25519');
  const alice = keyring.addFromUri('//Alice', { name: 'Alice' }, 'sr25519');
  console.log(
    "Alice's SS58-Encoded Address:",
    deriveAddress(alice.publicKey, POLKADOT_SS58_FORMAT)
  );

  // Construct a proxy balance transfer transaction offline.
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

  // A transfer to dave
  const transfer = methods.balances.transfer(
    {
      dest: '5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy', // Dave
      value: '43210000000000000',
    },
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

  console.log('Unsigned transfer: ', transfer.method);

  // Assume Bob is a proxy for Alice, so this will call the above transaction
  // and transfer money from Alice to Dave
  const unsigned = methods.proxy.proxy(
    {
      real: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', // Alice,
      forceProxyType: 'Any',
      call: transfer.method,
    },
    {
      address: deriveAddress(bob.publicKey, POLKADOT_SS58_FORMAT),
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
    `\nDecoded Transaction\n  Real: ${decodedUnsigned.method.args.real}\n` +
      `  forceProxyType: ${decodedUnsigned.method.args.forceProxyType}\n` +
      `  call: ${decodedUnsigned.method.args.call}`
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
    `\nDecoded Transaction\n  Real: ${payloadInfo.method.args.real}\n` +
      `  forceProxyType: ${payloadInfo.method.args.forceProxyType}\n` +
      `  call: ${payloadInfo.method.args.call}`
  );

  // Sign a payload. This operation should be performed on an offline device.
  const signature = signWith(bob, signingPayload, {
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
    `\nDecoded Transaction\n  Real: ${txInfo.method.args.real}\n` +
      `  forceProxyType: ${txInfo.method.args.forceProxyType}\n` +
      `  call: ${txInfo.method.args.call}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

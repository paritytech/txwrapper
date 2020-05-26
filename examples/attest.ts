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
  getPolkadotStatement,
  getRegistry,
  getTxHash,
  methods,
  POLKADOT_SS58_FORMAT,
} from '../src';
import { rpcToNode, signWith } from './util';

/**
 * Entry point of the script. This script assumes a Polkadot node is running
 * locally on `http://localhost:9933`.
 */
async function main(): Promise<void> {
  // Wait for the promise to resolve async WASM
  await cryptoWaitReady();
  // Create a new keyring, and add an "Alice" account
  const keyring = new Keyring();
  const alice = keyring.addFromMnemonic(
    'print slim hand lamp security hollow payment lecture jealous edge movie unique',
    { name: 'Alice' },
    'sr25519'
  );
  console.log(
    "Alice's SS58-Encoded Address:",
    deriveAddress(alice.publicKey, POLKADOT_SS58_FORMAT)
  );

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
  const registry = getRegistry('Polkadot', 'polkadot', specVersion);

  const polkadotAddress = '14FtbmoVqnwG6kdC89o9Tab73JC6QKbq49WADC41zLc9Di5a';
  const statementSentence = getPolkadotStatement('Regular');

  // Now we can create our `claims.claimAttest` unsigned tx.
  const unsigned = methods.claims.attest(
    {
      statement: statementSentence.sentence,
    },
    {
      address: polkadotAddress,
      blockHash,
      blockNumber: registry
        .createType('BlockNumber', block.header.number)
        .toNumber(),
      eraPeriod: 64,
      genesisHash,
      metadataRpc,
      nonce: 0,
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
    `\nDecoded Transaction\n  Statement: ${decodedUnsigned.method.args.statement}`
  );

  // Construct the signing payload from an unsigned transaction.
  const signingPayload = createSigningPayload(unsigned, { registry });
  console.log(`\nPayload to Sign: ${signingPayload}`);

  // Sign a payload. This operation should be performed on an offline device.
  const signature = signWith(registry, alice, signingPayload);
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
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

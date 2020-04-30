/**
 * @ignore Don't show this file in documentation.
 */ /** */

import { Keyring } from '@polkadot/api';
import metadataV11 from '@polkadot/metadata/Metadata/v11/static.polkadot';
import { TypeRegistry } from '@polkadot/types';
import { getSpecTypes } from '@polkadot/types-known';
import { cryptoWaitReady } from '@polkadot/util-crypto';

import {
  createSignedTx,
  createSigningPayload,
  decode,
  deriveAddress,
  getTxHash,
  methods,
  POLKADOT_SS58_FORMAT,
} from '../src';
import { signWith } from './util';

/**
 * Entry point of the script. This script is not doing anything for now,
 * because we don't have a Polkadot node to play with yet. For now, it assumes
 * a Polkadot mainnet chain (SS58, types), but is filled with dummy data.
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

  // Construct a balance transfer transaction offline.
  // To construct the tx, we need some up-to-date information from the node.
  // Since we don't have any Polkadot mainnet node yet, for now I'm just
  // putting some dummy data here.
  // From RPC `chain_getBlock`
  const blockNumber = '0x56b';
  // From RPC `chain_getBlock`
  const blockHash =
    '0x95711f74edcb52c518c070f91570f2f01dfa5c80fc926379b34142f287bbb221';
  // From RPC `chain_getBlock`
  const genesisHash =
    '0x22d37976435629a7d027f8113391cfaec285e7c3a63a982aa9f649873afcb82c';
  // From RPC `chain_getBlock`
  const metadataRpc = metadataV11;
  // From RPC `chain_getBlock`
  const specVersion = 9999;
  // From RPC `system_properties`
  const chainProperties = {
    ss58Format: 1,
    tokenDecimals: 12,
    tokenSymbol: 'DOT',
  };

  // Create Polkadot's type registry.
  const registry = new TypeRegistry();
  // If you're using your own chain with custom types, add these types here. We
  // are using a Kusama chain, and the required overrided types are hardcoded
  // in `@polkadot/types-known`.
  // Right now, we hardcode the specVersion to `9999`, to use the always latest
  // type overrides for Kusama. In real-life, you should use the specVersion
  // returned by `state_getRuntimeVersion` RPC.
  registry.register(getSpecTypes(registry, 'Polkadot', 'polkadot', 9999));
  // Let the registry be aware of chain properties, in particular the SS58
  // prefix for decoding addresses.
  registry.setChainProperties(
    registry.createType('ChainProperties', chainProperties)
  );

  // Now we can create our `balances.transfer` unsigned tx. The following
  // function takes the above data as arguments, so can be performed offline
  // if desired.
  const unsigned = methods.balances.transfer(
    {
      value: 12,
      dest: '14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // Bob
    },
    {
      address: deriveAddress(alice.publicKey, POLKADOT_SS58_FORMAT),
      blockHash,
      blockNumber: registry.createType('BlockNumber', blockNumber).toNumber(),
      genesisHash,
      metadataRpc,
      nonce: 1, // Assuming this is Alice's first tx on the chain
      specVersion,
      tip: 0,
      validityPeriod: 240,
    },
    {
      metadata: metadataRpc,
      registry,
    }
  );

  // Decode an unsigned transaction.
  const decodedUnsigned = decode(unsigned, {
    metadata: metadataRpc,
    registry,
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

  // Decode a signed payload.
  const txInfo = decode(tx, {
    metadata: metadataRpc,
    registry,
  });
  console.log(
    `\nDecoded Transaction\n  To: ${txInfo.method.args.dest}\n` +
      `  Amount: ${txInfo.method.args.value}\n`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

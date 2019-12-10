import { Keyring } from '@polkadot/keyring';
import { KeyringPair as KeyringPairBase } from '@polkadot/keyring/types';
import { hexToU8a } from '@polkadot/util';
import { mnemonicGenerate } from '@polkadot/util-crypto';

import { KUSAMA_SS58_FORMAT } from './util/constants';

const keyring = new Keyring({ type: 'ed25519' });
keyring.setSS58Format(KUSAMA_SS58_FORMAT);

/**
 * A keyring pair
 */
export interface KeyringPair extends KeyringPairBase {} // eslint-disable-line @typescript-eslint/no-empty-interface

/**
 * Generate a random public/private keypair offline
 */
export function generateKeypair(): KeyringPair {
  return keyring.addFromMnemonic(mnemonicGenerate());
}

/**
 * Import a private key and create a KeyringPair
 * @param privateKey - The private key of the key pair
 */
export function importPrivateKey(privateKey: string | Uint8Array): KeyringPair {
  if (typeof privateKey === 'string') {
    return keyring.addFromSeed(hexToU8a(privateKey));
  }

  return keyring.addFromSeed(privateKey);
}

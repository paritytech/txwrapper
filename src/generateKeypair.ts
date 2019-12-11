import { Keyring } from '@polkadot/keyring';
import { KeyringPair as KeyringPairBase } from '@polkadot/keyring/types';
import { hexToU8a } from '@polkadot/util';

import { KUSAMA_SS58_FORMAT } from './util/constants';

/**
 * A keyring pair
 */
export interface KeyringPair extends KeyringPairBase {} // eslint-disable-line @typescript-eslint/no-empty-interface
// Using an interface above so that KeyringPair shows up in docs

/**
 * Import a private key and create a KeyringPair
 * @param privateKey - The private key of the key pair
 */
export function importPrivateKey(privateKey: string | Uint8Array): KeyringPair {
  const keyring = new Keyring({ type: 'ed25519' });
  keyring.setSS58Format(KUSAMA_SS58_FORMAT);

  if (typeof privateKey === 'string') {
    return keyring.addFromSeed(hexToU8a(privateKey));
  }

  return keyring.addFromSeed(privateKey);
}

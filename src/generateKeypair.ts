import { Keyring } from '@polkadot/keyring';
import { KeyringPair as KeyringPairBase } from '@polkadot/keyring/types';
import { mnemonicGenerate } from '@polkadot/util-crypto';

import { KUSAMA_SS58_FORMAT } from './util/constants';

/**
 * A keyring pair
 */
export interface KeyringPair extends KeyringPairBase {} // eslint-disable-line @typescript-eslint/no-empty-interface

/**
 * Generate a valid public/private keypair offline
 */
export function generateKeypair(): KeyringPair {
  const keyring = new Keyring();
  keyring.setSS58Format(KUSAMA_SS58_FORMAT);

  return keyring.addFromMnemonic(mnemonicGenerate());
}

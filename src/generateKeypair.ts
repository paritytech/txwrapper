import { Keyring } from '@polkadot/keyring';
import { KeyringPair } from '@polkadot/keyring/types';
import { mnemonicGenerate } from '@polkadot/util-crypto';

/**
 * Generate a valid public/private keypair offline
 */
export function generateKeypair(): KeyringPair {
  const keyring = new Keyring();

  return keyring.addFromMnemonic(mnemonicGenerate());
}

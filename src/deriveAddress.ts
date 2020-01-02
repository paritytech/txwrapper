import { encodeAddress } from '@polkadot/keyring';

import { KUSAMA_SS58_FORMAT } from './util/constants';

/**
 * Derive an address from a cryptographic public key offline.
 *
 * @param publicKey - The public key to derive from
 * @param ss58Format - The SS58 format to use
 */
export function deriveAddress(
  publicKey: string | Uint8Array,
  ss58Format: number = KUSAMA_SS58_FORMAT
): string {
  return encodeAddress(publicKey, ss58Format);
}

import { createType, TypeRegistry } from '@polkadot/types';

import { UnsignedTransaction } from './balanceTransfer';

/**
 * Construct the signing payload from an unsigned transaction and export it to
 * a remote signer (this is often called "detached signing")
 *
 * @param unsigned - The JSON representing the unsigned transaction
 */
export function createSigningPayload(unsigned: UnsignedTransaction): string {
  const registry = new TypeRegistry();

  return createType(registry, 'ExtrinsicPayload', unsigned, {
    version: unsigned.version
  }).toHex();
}

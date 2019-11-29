import { createType, TypeRegistry } from '@polkadot/types';

import { UnsignedTransaction } from './balanceTransfer';

/**
 * Create the signing payload (i.e. the payload that needs to be signed) from
 * an unsigned transaction.
 *
 * @param unsigned - The JSON representing the unsigned transaction
 */
export function createSigningPayload(unsigned: UnsignedTransaction): string {
  const registry = new TypeRegistry();

  return createType(registry, 'ExtrinsicPayload', unsigned, {
    version: unsigned.version
  }).toHex();
}

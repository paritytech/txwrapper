import { createType } from '@polkadot/types';

import { Options, sanitizeOptions, UnsignedTransaction } from './util';

/**
 * Construct the signing payload from an unsigned transaction and export it to
 * a remote signer (this is often called "detached signing").
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 */
export function createSigningPayload(
  unsigned: UnsignedTransaction,
  options?: Partial<Options>
): string {
  const { registry } = sanitizeOptions({
    metadata: unsigned.metadataRpc,
    ...options
  });

  return createType(registry, 'ExtrinsicPayload', unsigned, {
    version: unsigned.version
  }).toHex();
}

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
    // FIXME `options` has a metadata field, `unsigned` has a metadata field,
    // so which one should take precedence? For now, it's `options`.
    metadata: unsigned.metadataRpc,
    ...options,
  });

  return registry
    .createType('ExtrinsicPayload', unsigned, {
      version: unsigned.version,
    })
    .toHex();
}

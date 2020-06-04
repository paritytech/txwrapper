import { createMetadata, OptionsWithMeta, UnsignedTransaction } from './util';

/**
 * Construct the signing payload from an unsigned transaction and export it to
 * a remote signer (this is often called "detached signing").
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 */
export function createSigningPayload(
  unsigned: UnsignedTransaction,
  options: OptionsWithMeta
): string {
  const { registry } = options;
  registry.setMetadata(createMetadata(registry, options.metadataRpc));

  return registry
    .createType('ExtrinsicPayload', unsigned, {
      version: unsigned.version,
    })
    .toHex();
}

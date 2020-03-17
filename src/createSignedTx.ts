import { Metadata } from '@polkadot/types';

import { Options, sanitizeOptions, UnsignedTransaction } from './util';

/**
 * Serialize a signed transaction in a format that can be submitted over the
 * Node RPC Interface from the signing payload and signature produced by the
 * remote signer.
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param signature - Signature of the signing payload produced by the remote
 * signer.
 */
export function createSignedTx(
  unsigned: UnsignedTransaction,
  signature: string,
  options?: Partial<Options>
): string {
  const { metadata, registry } = sanitizeOptions({
    ...options,
    metadata: unsigned.metadataRpc
  });
  registry.setMetadata(new Metadata(registry, metadata));

  const extrinsic = registry.createType(
    'Extrinsic',
    { method: unsigned.method },
    { version: unsigned.version }
  );

  extrinsic.addSignature(unsigned.address, signature, unsigned);

  return extrinsic.toHex();
}

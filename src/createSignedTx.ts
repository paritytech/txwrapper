import { createType, Metadata, TypeRegistry } from '@polkadot/types';

import { decodeSigningPayload } from './decode/decodeSigningPayload';
import { EXTRINSIC_VERSION } from './util/constants';

/**
 * Serialize a signed transaction in a format that can be submitted over the
 * Node RPC Interface from the signing payload and signature produced by the
 * remote signer
 *
 * @param unsigned - The JSON representing the unsigned transaction
 * @param signature - Signature of the signing payload produced by the remote
 * signer
 */
export function createSignedTx(
  address: string,
  signingPayload: string,
  signature: string,
  metadataRpc: string
): string {
  const registry = new TypeRegistry();
  registry.setMetadata(new Metadata(registry, metadataRpc));

  const decoded = decodeSigningPayload(signingPayload, metadataRpc);

  const extrinsic = createType(
    registry,
    'Extrinsic',
    { method: decoded.method },
    { version: EXTRINSIC_VERSION }
  );

  extrinsic.addSignature(address, signature, decoded);

  return extrinsic.toHex();
}

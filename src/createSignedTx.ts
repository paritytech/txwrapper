import { createType, TypeRegistry } from '@polkadot/types';

import { UnsignedTransaction } from './balanceTransfer';

/**
 * Create the signing payload (i.e. the payload that needs to be signed) from
 * an unsigned transaction.
 *
 * @param unsigned - The JSON representing the unsigned transaction
 * @param signature - Signature of the signing payload produced by the remote signer
 */
export function createSignedTx(
  unsigned: UnsignedTransaction,
  signature: string
): string {
  const registry = new TypeRegistry();

  const extrinsic = createType(
    registry,
    'Extrinsic',
    { method: unsigned.method },
    { version: unsigned.version }
  );

  extrinsic.addSignature(unsigned.address, signature, unsigned);

  return extrinsic.toHex();
}

import { UnsignedTransaction } from '../balanceTransfer';
import { DecodedSignedTx, decodeSignedTx } from './decodeSignedTx';
import {
  DecodedSigningPayload,
  decodeSigningPayload
} from './decodeSigningPayload';
import { decodeUnsignedTx } from './decodeUnsignedTx';

/**
 * Parse the transaction information from a signing payload, an unsigned tx or
 * a signed tx
 *
 * @param data - The data to parse, should be a signing payload or a signed tx
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`
 */
export function decode(
  data: string | UnsignedTransaction,
  metadataRpc: string
): DecodedSignedTx | DecodedSigningPayload {
  if (typeof data === 'string') {
    try {
      return decodeSignedTx(data, metadataRpc);
    } catch (error) {
      // do nothing
    }

    try {
      return decodeSigningPayload(data, metadataRpc);
    } catch (error) {
      // do nothing
    }

    throw new Error('data seems to be not a signing payload nor a signed tx');
  }

  return decodeUnsignedTx(data, metadataRpc);
}

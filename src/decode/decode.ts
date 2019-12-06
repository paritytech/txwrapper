import { TxInfo, UnsignedTransaction } from '../balanceTransfer';
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
 * @param data - The data to parse, should be a signing payload, a signed tx or
 * an unsigned tx
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`
 */
export function decode(
  unsigned: UnsignedTransaction,
  metadataRpc: string
): TxInfo;
export function decode(
  data: string,
  metadataRpc: string
): DecodedSignedTx | DecodedSigningPayload;
export function decode(
  data: string | UnsignedTransaction,
  metadataRpc: string
): DecodedSignedTx | DecodedSigningPayload | TxInfo {
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

import { TxInfo, UnsignedTransaction } from '../balanceTransfer';
import { DecodedSignedTx, decodeSignedTx } from './decodeSignedTx';
import {
  DecodedSigningPayload,
  decodeSigningPayload
} from './decodeSigningPayload';
import { decodeUnsignedTx } from './decodeUnsignedTx';

/**
 * Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
 *
 * @param unsignedTx - The data to parse, as an unsigned tx.
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`.
 */
export function decode(
  unsignedTx: UnsignedTransaction,
  metadataRpc: string
): TxInfo;
/**
 * Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
 *
 * @param signedTx - The data to parse, as a signed tx hex string.
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`.
 */
export function decode(signedTx: string, metadataRpc: string): DecodedSignedTx;
/**
 * Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
 *
 * @param signingPayload - The data to parse, as a signing payload hex string.
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`.
 */
export function decode(
  signingPayload: string,
  metadataRpc: string
): DecodedSigningPayload;
export function decode(
  data: string | UnsignedTransaction,
  metadataRpc: string
): DecodedSignedTx | TxInfo | DecodedSigningPayload {
  if (typeof data === 'string') {
    let decodedInfo: DecodedSigningPayload | DecodedSignedTx;
    try {
      decodedInfo = decodeSigningPayload(data, metadataRpc);
    } catch {
      decodedInfo = decodeSignedTx(data, metadataRpc);
    }
    return decodedInfo;
  }

  return decodeUnsignedTx(data, metadataRpc);
}

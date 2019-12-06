import { TxInfo, UnsignedTransaction } from '../balanceTransfer';
import { DecodedSignedTx, decodeSignedTx } from './decodeSignedTx';
import { decodeUnsignedTx } from './decodeUnsignedTx';

/**
 * Parse the transaction information from an unsigned tx or a signed tx
 *
 * @param unsignedTx - The data to parse, as an unsigned tx
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`
 */
export function decode(
  unsignedTx: UnsignedTransaction,
  metadataRpc: string
): TxInfo;
/**
 * Parse the transaction information from an unsigned tx or a signed tx
 *
 * @param signedTx - The data to parse, as a signed tx hex string
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`
 */
export function decode(signedTx: string, metadataRpc: string): DecodedSignedTx;
export function decode(
  data: string | UnsignedTransaction,
  metadataRpc: string
): DecodedSignedTx | TxInfo {
  if (typeof data === 'string') {
    return decodeSignedTx(data, metadataRpc);
  }

  return decodeUnsignedTx(data, metadataRpc);
}

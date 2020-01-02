import { KUSAMA_SS58_FORMAT } from '../util/constants';
import { UnsignedTransaction } from '../util/types';
import { DecodedSignedTx, decodeSignedTx } from './decodeSignedTx';
import {
  DecodedSigningPayload,
  decodeSigningPayload
} from './decodeSigningPayload';
import { DecodedUnsignedTx, decodeUnsignedTx } from './decodeUnsignedTx';

/**
 * Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
 *
 * @param unsignedTx - The data to parse, as an unsigned tx.
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`.
 * @param ss58Format - The SS-58 address encoding to return.
 */
export function decode(
  unsignedTx: UnsignedTransaction,
  metadataRpc: string,
  ss58Format?: number
): DecodedUnsignedTx;

/**
 * Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
 *
 * @param signedTx - The data to parse, as a signed tx hex string.
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`.
 * @param ss58Format - The SS-58 address encoding to return.
 */
export function decode(
  signedTx: string,
  metadataRpc: string,
  ss58Format?: number
): DecodedSignedTx;

/**
 * Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
 *
 * @param signingPayload - The data to parse, as a signing payload hex string.
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`.
 * @param ss58Format - The SS-58 address encoding to return.
 */
export function decode(
  signingPayload: string,
  metadataRpc: string,
  ss58Format?: number
): DecodedSigningPayload;

export function decode(
  data: string | UnsignedTransaction,
  metadataRpc: string,
  ss58Format: number = KUSAMA_SS58_FORMAT
): DecodedSignedTx | DecodedUnsignedTx | DecodedSigningPayload {
  if (typeof data === 'string') {
    let decodedInfo: DecodedSigningPayload | DecodedSignedTx;
    try {
      decodedInfo = decodeSigningPayload(data, metadataRpc, ss58Format);
    } catch {
      decodedInfo = decodeSignedTx(data, metadataRpc, ss58Format);
    }
    return decodedInfo;
  }

  return decodeUnsignedTx(data, metadataRpc, ss58Format);
}

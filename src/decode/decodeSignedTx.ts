/**
 * @ignore
 */ /** */

import { createType, Metadata } from '@polkadot/types';
import { hexToU8a } from '@polkadot/util';
import { setSS58Format } from '@polkadot/util-crypto';

import {
  BLOCKTIME,
  Options,
  sanitizeOptions,
  toTxMethod,
  TxInfo
} from '../util';

export type DecodedSignedTx = Omit<
  TxInfo,
  'blockHash' | 'blockNumber' | 'genesisHash' | 'specVersion' | 'version'
>;

/**
 * Parse the transaction information from a signed transaction offline.
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export function decodeSignedTx(
  signedTx: string,
  options: Options
): DecodedSignedTx;

/**
 * Parse the transaction information from a signed transaction offline.
 *
 * @deprecated Prefer passing an `options` object as second argument.
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`.
 * @param ss58Format - The SS-58 address encoding to return.
 */
export function decodeSignedTx(
  signedTx: string,
  metadataRpc: string,
  ss58Format?: number
): DecodedSignedTx;

export function decodeSignedTx(
  signedTx: string,
  metadataOrOptions: string | Options,
  _ss58Format?: number
): DecodedSignedTx {
  const { metadata, registry, ss58Format } = sanitizeOptions(
    metadataOrOptions,
    _ss58Format
  );

  registry.setMetadata(new Metadata(registry, metadata));
  setSS58Format(ss58Format);

  const tx = createType(registry, 'Extrinsic', hexToU8a(signedTx), {
    isSigned: true
  });
  const methodCall = createType(registry, 'Call', tx.method);
  const method = toTxMethod(registry, methodCall);

  return {
    address: tx.signer.toString(),
    metadataRpc: metadata,
    method,
    nonce: tx.nonce.toNumber(),
    tip: tx.tip.toNumber(),
    validityPeriod: tx.era.asMortalEra.period.toNumber() * BLOCKTIME
  };
}

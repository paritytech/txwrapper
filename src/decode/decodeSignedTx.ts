/**
 * @ignore
 */ /** */

import { hexToU8a } from '@polkadot/util';

import {
  createMetadata,
  Options,
  sanitizeOptions,
  toTxMethod,
  TxInfo,
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
  const { metadata, registry } = sanitizeOptions(
    metadataOrOptions,
    _ss58Format
  );

  registry.setMetadata(createMetadata(registry, metadata));

  const tx = registry.createType('Extrinsic', hexToU8a(signedTx), {
    isSigned: true,
  });
  const methodCall = registry.createType('Call', tx.method);
  const method = toTxMethod(registry, methodCall);

  return {
    address: tx.signer.toString(),
    eraPeriod: tx.era.asMortalEra.period.toNumber(),
    metadataRpc: metadata,
    method,
    nonce: tx.nonce.toNumber(),
    tip: tx.tip.toNumber(),
  };
}

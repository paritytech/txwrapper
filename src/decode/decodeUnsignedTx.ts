/**
 * @ignore
 */ /** */

import {
  createMetadata,
  Options,
  sanitizeOptions,
  toTxMethod,
  TxInfo,
  UnsignedTransaction,
} from '../util';

export type DecodedUnsignedTx = TxInfo;

/**
 * Parse the transaction information from an unigned transaction offline.
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export function decodeUnsignedTx(
  unsigned: UnsignedTransaction,
  options: Options
): DecodedUnsignedTx;

/**
 * Parse the transaction information from an unigned transaction offline.
 *
 * @deprecated Prefer passing an `options` object as second argument.
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`.
 * @param ss58Format - The SS-58 address encoding to return.
 */
export function decodeUnsignedTx(
  unsigned: UnsignedTransaction,
  metadataRpc: string,
  ss58Format: number
): DecodedUnsignedTx;

export function decodeUnsignedTx(
  unsigned: UnsignedTransaction,
  metadataOrOptions: string | Options,
  _ss58Format?: number
): DecodedUnsignedTx {
  const { metadata, registry } = sanitizeOptions(
    metadataOrOptions,
    _ss58Format
  );

  registry.setMetadata(createMetadata(registry, metadata));

  const methodCall = registry.createType('Call', unsigned.method);
  const method = toTxMethod(registry, methodCall);

  return {
    address: unsigned.address,
    blockHash: unsigned.blockHash,
    blockNumber: registry
      .createType('BlockNumber', unsigned.blockNumber)
      .toNumber(),
    eraPeriod: registry.createType('MortalEra', unsigned.era).period.toNumber(),
    genesisHash: unsigned.genesisHash,
    metadataRpc: metadata,
    method,
    nonce: registry.createType('Compact<Index>', unsigned.nonce).toNumber(),
    specVersion: registry.createType('u32', unsigned.specVersion).toNumber(),
    tip: registry.createType('Compact<Balance>', unsigned.tip).toNumber(),
    transactionVersion: registry
      .createType('u32', unsigned.transactionVersion)
      .toNumber(),
  };
}

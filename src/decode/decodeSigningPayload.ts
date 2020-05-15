/**
 * @ignore
 */ /** */

import {
  createMetadata,
  DecodeOptions,
  EXTRINSIC_VERSION,
  toTxMethod,
  TxInfo,
} from '../util';

export type DecodedSigningPayload = Omit<TxInfo, 'address' | 'blockNumber'>;

/**
 * Parse the transaction information from a signing payload.
 *
 * @param signingPayload - The signing payload, in hex.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export function decodeSigningPayload(
  signingPayload: string,
  options: DecodeOptions
): DecodedSigningPayload {
  const { metadata, registry } = options;

  registry.setMetadata(createMetadata(registry, metadata));

  const payload = registry.createType('ExtrinsicPayload', signingPayload, {
    version: EXTRINSIC_VERSION,
  });
  const methodCall = registry.createType('Call', payload.method);
  const method = toTxMethod(registry, methodCall);

  return {
    blockHash: payload.blockHash.toHex(),
    eraPeriod: payload.era.asMortalEra.period.toNumber(),
    genesisHash: payload.genesisHash.toHex(),
    metadataRpc: metadata,
    method,
    nonce: payload.nonce.toNumber(),
    specVersion: payload.specVersion.toNumber(),
    tip: payload.tip.toNumber(),
    transactionVersion: -1, // FIXME https://github.com/polkadot-js/api/pull/2287
  };
}

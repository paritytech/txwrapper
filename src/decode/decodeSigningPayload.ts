/**
 * @ignore
 */ /** */

import { createType, Metadata, TypeRegistry } from '@polkadot/types';
import { setSS58Format } from '@polkadot/util-crypto';

import {
  BLOCKTIME,
  EXTRINSIC_VERSION,
  KUSAMA_SS58_FORMAT
} from '../util/constants';
import { serializeMethod, TxInfo } from '../util/method';

export type DecodedSigningPayload = Omit<TxInfo, 'address' | 'blockNumber'>;

/**
 * Parse the transaction information from a signing payload.
 *
 * @param signingPayload - The signing payload, in hex.
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`.
 * @param ss58Format - The SS-58 address encoding to return.
 */
export function decodeSigningPayload(
  signingPayload: string,
  metadataRpc: string,
  ss58Format: number = KUSAMA_SS58_FORMAT
): DecodedSigningPayload {
  const registry = new TypeRegistry();
  registry.setMetadata(new Metadata(registry, metadataRpc));
  setSS58Format(ss58Format);

  const payload = createType(registry, 'ExtrinsicPayload', signingPayload, {
    version: EXTRINSIC_VERSION
  });
  const methodCall = createType(registry, 'Call', payload.method);
  const method = serializeMethod(registry, methodCall);

  return {
    blockHash: payload.blockHash.toHex(),
    genesisHash: payload.genesisHash.toHex(),
    metadataRpc,
    method,
    nonce: payload.nonce.toNumber(),
    specVersion: payload.specVersion.toNumber(),
    tip: payload.tip.toNumber(),
    validityPeriod: payload.era.asMortalEra.period.toNumber() * BLOCKTIME
  };
}

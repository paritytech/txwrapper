/**
 * @ignore
 */

/**
 * Blank comment to make typedoc work
 */

import { createType, Metadata, TypeRegistry } from '@polkadot/types';

import {
  BLOCKTIME,
  EXTRINSIC_VERSION,
  KUSAMA_SS58_FORMAT
} from '../util/constants';
import { BaseTxInfo } from '../util/types';
import { getMethodData } from './decodeUtils';

interface DecodedWithMethod extends BaseTxInfo {
  methodData: any;
}

export type DecodedSigningPayload = Omit<
  DecodedWithMethod,
  'address' | 'blockNumber'
>;

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

  const payload = createType(registry, 'ExtrinsicPayload', signingPayload, {
    version: EXTRINSIC_VERSION
  });
  const method = createType(registry, 'Call', payload.method);

  const methodInfo = getMethodData(method, ss58Format);

  return {
    methodData: methodInfo,
    blockHash: payload.blockHash.toHex(),
    genesisHash: payload.genesisHash.toHex(),
    metadataRpc,
    nonce: payload.nonce.toNumber(),
    specVersion: payload.specVersion.toNumber(),
    tip: payload.tip.toNumber(),
    validityPeriod: payload.era.asMortalEra.period.toNumber() * BLOCKTIME
  };
}

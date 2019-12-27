/**
 * @ignore
 */

/**
 * Blank comment to make typedoc work
 */

import { Compact, createType, Metadata, TypeRegistry } from '@polkadot/types';
import { Balance } from '@polkadot/types/interfaces';
import { setSS58Format } from '@polkadot/util-crypto';

import { TxInfoTransfer } from '../balanceTransfer';
import {
  BLOCKTIME,
  EXTRINSIC_VERSION,
  KUSAMA_SS58_FORMAT
} from '../util/constants';

export type DecodedSigningPayload = Omit<
  TxInfoTransfer,
  'address' | 'blockNumber'
>;

/**
 * Parse the transaction information from a signing payload
 *
 * @param signingPayload - The signing payload, in hex
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`
 */
export function decodeSigningPayload(
  signingPayload: string,
  metadataRpc: string
): DecodedSigningPayload {
  const registry = new TypeRegistry();
  registry.setMetadata(new Metadata(registry, metadataRpc));

  const payload = createType(registry, 'ExtrinsicPayload', signingPayload, {
    version: EXTRINSIC_VERSION
  });
  const method = createType(registry, 'Call', payload.method);

  setSS58Format(KUSAMA_SS58_FORMAT);

  return {
    amount: (method.args[1] as Compact<Balance>).toNumber(),
    blockHash: payload.blockHash.toHex(),
    genesisHash: payload.genesisHash.toHex(),
    keepAlive: method.methodName === 'transferKeepAlive',
    metadataRpc,
    nonce: payload.nonce.toNumber(),
    specVersion: payload.specVersion.toNumber(),
    tip: payload.tip.toNumber(),
    to: method.args[0].toString(),
    validityPeriod: payload.era.asMortalEra.period.toNumber() * BLOCKTIME
  };
}

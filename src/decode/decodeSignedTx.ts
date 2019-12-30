/**
 * @ignore
 */ /** */

import { createType, Metadata, TypeRegistry } from '@polkadot/types';
import { hexToU8a } from '@polkadot/util';
import { setSS58Format } from '@polkadot/util-crypto';

import { BLOCKTIME, KUSAMA_SS58_FORMAT } from '../util/constants';
import { serializeMethod, TxInfo } from '../util/method';

export type DecodedSignedTx = Omit<
  TxInfo,
  'blockHash' | 'blockNumber' | 'genesisHash' | 'specVersion' | 'version'
>;

/**
 * Parse the transaction information from a signed transaction offline.
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`.
 * @param ss58Format - The SS-58 address encoding to return.
 */
export function decodeSignedTx(
  signedTx: string,
  metadataRpc: string,
  ss58Format: number = KUSAMA_SS58_FORMAT
): DecodedSignedTx {
  const registry = new TypeRegistry();
  registry.setMetadata(new Metadata(registry, metadataRpc));
  setSS58Format(ss58Format);

  const tx = createType(registry, 'Extrinsic', hexToU8a(signedTx), {
    isSigned: true
  });
  const methodCall = createType(registry, 'Call', tx.method);
  const method = serializeMethod(registry, methodCall);

  return {
    address: tx.signer.toString(),
    metadataRpc,
    method,
    nonce: tx.nonce.toNumber(),
    tip: tx.tip.toNumber(),
    validityPeriod: tx.era.asMortalEra.period.toNumber() * BLOCKTIME
  };
}

/**
 * @ignore
 */ /** */

import { createType, Metadata } from '@polkadot/types';
import { setSS58Format } from '@polkadot/util-crypto';

import {
  BLOCKTIME,
  getRegistry,
  toTxMethod,
  TxInfo,
  UnsignedTransaction
} from '../util';

export type DecodedUnsignedTx = TxInfo;

/**
 * Parse the transaction information from an unigned transaction offline.
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`.
 * @param ss58Format - The SS-58 address encoding to return.
 */
export function decodeUnsignedTx(
  unsigned: UnsignedTransaction,
  metadataRpc: string,
  ss58Format: number
): DecodedUnsignedTx {
  const registry = getRegistry();
  registry.setMetadata(new Metadata(registry, metadataRpc));
  setSS58Format(ss58Format);

  const methodCall = createType(registry, 'Call', unsigned.method);
  const method = toTxMethod(registry, methodCall);

  return {
    address: unsigned.address,
    blockHash: unsigned.blockHash,
    blockNumber: createType(
      registry,
      'BlockNumber',
      unsigned.blockNumber
    ).toNumber(),
    genesisHash: unsigned.genesisHash,
    metadataRpc,
    method,
    nonce: createType(registry, 'Compact<Index>', unsigned.nonce).toNumber(),
    specVersion: createType(registry, 'u32', unsigned.specVersion).toNumber(),
    tip: createType(registry, 'Compact<Balance>', unsigned.tip).toNumber(),
    validityPeriod:
      createType(registry, 'MortalEra', unsigned.era).period.toNumber() *
      BLOCKTIME
  };
}

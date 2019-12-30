/**
 * @ignore
 */ /** */

import { createType, Metadata, TypeRegistry } from '@polkadot/types';
import { setSS58Format } from '@polkadot/util-crypto';

import { BLOCKTIME, KUSAMA_SS58_FORMAT } from '../util/constants';
import { BaseTxInfo, UnsignedTransaction } from '../util/types';
import { getMethodData } from './decodeUtils';

export interface DecodedUnsignedTx extends BaseTxInfo {
  methodData: any;
}

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
  ss58Format: number = KUSAMA_SS58_FORMAT
): DecodedUnsignedTx {
  const registry = new TypeRegistry();
  registry.setMetadata(new Metadata(registry, metadataRpc));

  const method = createType(registry, 'Call', unsigned.method);

  const methodInfo = getMethodData(method, ss58Format);

  setSS58Format(ss58Format);

  return {
    address: unsigned.address,
    methodData: methodInfo,
    blockHash: unsigned.blockHash,
    blockNumber: createType(
      registry,
      'BlockNumber',
      unsigned.blockNumber
    ).toNumber(),
    genesisHash: unsigned.genesisHash,
    metadataRpc,
    nonce: createType(registry, 'Compact<Index>', unsigned.nonce).toNumber(),
    specVersion: createType(registry, 'u32', unsigned.specVersion).toNumber(),
    tip: createType(registry, 'Compact<Balance>', unsigned.tip).toNumber(),
    validityPeriod:
      createType(registry, 'MortalEra', unsigned.era).period.toNumber() *
      BLOCKTIME
  };
}

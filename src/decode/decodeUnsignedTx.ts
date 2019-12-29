/**
 * @ignore
 */

/**
 * Blank comment to make typedoc work
 */

import { createType, Metadata, TypeRegistry } from '@polkadot/types';
import { setSS58Format } from '@polkadot/util-crypto';

import { BLOCKTIME, KUSAMA_SS58_FORMAT } from '../util/constants';
import { BaseTxInfo } from '../util/interfaces';
import { UnsignedTransaction } from '../util/interfaces';
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
 */
export function decodeUnsignedTx(
  unsigned: UnsignedTransaction,
  metadataRpc: string
): DecodedUnsignedTx {
  const registry = new TypeRegistry();
  registry.setMetadata(new Metadata(registry, metadataRpc));

  const method = createType(registry, 'Call', unsigned.method);

  const methodInfo = getMethodData(method);

  setSS58Format(KUSAMA_SS58_FORMAT);

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

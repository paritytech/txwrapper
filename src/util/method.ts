import Metadata from '@polkadot/metadata';
import { createType, TypeRegistry } from '@polkadot/types';
import { AnyJson } from '@polkadot/types/types';

import { EXTRINSIC_VERSION, ONE_SECOND } from './constants';
import { BaseTxInfo, UnsignedTransaction } from './types';

/**
 *
 */
interface TxInfo extends BaseTxInfo {
  method: {
    args: {
      name: string;
      type: string;
      value: AnyJson;
    }[];
    name: string;
    pallet: string;
  };
}

export function createMethod(info: TxInfo): UnsignedTransaction {
  const registry = new TypeRegistry();
  const metadata = new Metadata(registry, info.metadataRpc);

  const method = metadata.tx[info.method.pallet]
    [info.method.name](...info.method.args.map(({ value }) => value))
    .toHex();

  return {
    address: info.address,
    blockHash: info.blockHash,
    blockNumber: createType(registry, 'BlockNumber', info.blockNumber).toHex(),
    era: createType(registry, 'ExtrinsicEra', {
      current: info.blockNumber,
      period: ONE_SECOND * info.validityPeriod
    }).toHex(),
    genesisHash: info.genesisHash,
    metadataRpc: info.metadataRpc,
    method,
    nonce: createType(registry, 'Compact<Index>', info.nonce).toHex(),
    specVersion: createType(registry, 'u32', info.specVersion).toHex(),
    tip: createType(registry, 'Compact<Balance>', info.tip).toHex(),
    version: EXTRINSIC_VERSION
  };
}

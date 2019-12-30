import Metadata from '@polkadot/metadata';
import { createType, TypeRegistry } from '@polkadot/types';
import { AnyJson } from '@polkadot/types/types';

import { EXTRINSIC_VERSION, ONE_SECOND } from './constants';
import { BaseTxInfo, UnsignedTransaction } from './types';

export type Args = Record<string, AnyJson>;

/**
 *
 */
interface TxInfo extends BaseTxInfo {
  method: {
    args: Args;
    name: string;
    pallet: string;
  };
}

export function createMethod(info: TxInfo): UnsignedTransaction {
  const registry = new TypeRegistry();
  const metadata = new Metadata(registry, info.metadataRpc);

  const methodFunction = metadata.tx[info.method.pallet][info.method.name];
  const method = methodFunction(
    ...methodFunction.meta.args.map(arg => {
      if (info.method.args[arg.name.toString()] === undefined) {
        throw new Error(
          `Method ${info.method.pallet}::${
            info.method.name
          } expects argument ${arg.toString()}, but got undefined`
        );
      }

      return info.method.args[arg.name.toString()];
    })
  ).toHex();

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

import Metadata from '@polkadot/metadata';
import { createType, createTypeUnsafe, TypeRegistry } from '@polkadot/types';
import { Call } from '@polkadot/types/interfaces';
import { AnyJson } from '@polkadot/types/types';

import { EXTRINSIC_VERSION, ONE_SECOND } from './constants';
import { BaseTxInfo, UnsignedTransaction } from './types';

export type Args = Record<string, AnyJson>;

export interface Method {
  args: Args;
  name: string;
  pallet: string;
}

/**
 * Complete information about a tx
 */
export interface TxInfo extends BaseTxInfo {
  method: Method;
}

/**
 * Helper function to construct an offline method. This function is used in all
 * method in the `methods/` folder.
 *
 * @param info - All info necessary to construct a method. That includes base
 * tx info, as well as method name & arguments.
 */
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

/**
 * From a PolkadotJs `Call` type, get a serialized object representing the call
 *
 * @param registry - The type registry
 * @param method - The method to serialize
 */
export function serializeMethod(registry: TypeRegistry, method: Call): Method {
  // Mapping of argName->argType
  const argsDef = JSON.parse(method.Type.args);
  // Mapping of argName->argValue
  const args = Object.keys(argsDef).reduce((accumulator, key, index) => {
    const codec = createTypeUnsafe(registry, argsDef[key], [
      method.args[index]
    ]);

    // Normally, we would just use `codec.toJSON()` to output a nice JSON
    // format. But for some methods, we might want a customized output. Here
    // we handle these exceptions:

    // staking::bond, payee: we want string (e.g. "Staked") instead of number
    // (e.g. 0)
    if (
      method.sectionName === 'staking' &&
      method.methodName === 'bond' &&
      key === 'payee'
    ) {
      accumulator[key] = codec.toString();
    } else {
      accumulator[key] = codec.toJSON();
    }

    return accumulator;
  }, {} as Args);

  return {
    args,
    name: method.methodName,
    pallet: method.sectionName
  };
}

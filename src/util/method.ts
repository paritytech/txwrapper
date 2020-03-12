/**
 * @ignore
 */ /** */

import Metadata from '@polkadot/metadata/Decorated';
import { createType, createTypeUnsafe, TypeRegistry } from '@polkadot/types';
import { Call } from '@polkadot/types/interfaces';
import { AnyJson } from '@polkadot/types/types';
import { stringCamelCase } from '@polkadot/util';

import { EXTRINSIC_VERSION, ONE_SECOND } from './constants';
import { getRegistry } from './options';
import { BaseTxInfo, UnsignedTransaction } from './types';

/**
 * Default values for tx info, if the user doesn't specify any
 */
const DEFAULTS = {
  /**
   * Don't add any tip by default
   */
  tip: 0,
  /**
   * Construct a mortal extrinsic of ~5 minutes
   */
  validityPeriod: 5 * 60
};

export type Args = Record<string, AnyJson>;

/**
 * Format used in txwrapper to represent a method.
 */
export interface TxMethod {
  args: Args;
  name: string;
  pallet: string;
}

/**
 * Complete information about a tx
 */
export interface TxInfo extends BaseTxInfo {
  method: TxMethod;
}

/**
 * Helper function to construct an offline method. This function is used in all
 * method in the `methods/` folder.
 *
 * @param info - All info necessary to construct a method. That includes base
 * tx info, as well as method name & arguments.
 */
export function createMethod(info: TxInfo): UnsignedTransaction {
  const registry = getRegistry();
  const metadata = new Metadata(registry, info.metadataRpc);

  const methodFunction = metadata.tx[info.method.pallet][info.method.name];
  const method = methodFunction(
    ...methodFunction.meta.args.map(arg => {
      if (
        info.method.args[stringCamelCase(arg.name.toString())] === undefined
      ) {
        throw new Error(
          `Method ${info.method.pallet}::${
            info.method.name
          } expects argument ${arg.toString()}, but got undefined`
        );
      }

      return info.method.args[stringCamelCase(arg.name.toString())];
    })
  ).toHex();

  return {
    address: info.address,
    blockHash: info.blockHash,
    blockNumber: createType(registry, 'BlockNumber', info.blockNumber).toHex(),
    era: createType(registry, 'ExtrinsicEra', {
      current: info.blockNumber,
      period: ONE_SECOND * (info.validityPeriod || DEFAULTS.validityPeriod)
    }).toHex(),
    genesisHash: info.genesisHash,
    metadataRpc: info.metadataRpc,
    method,
    nonce: createType(registry, 'Compact<Index>', info.nonce).toHex(),
    specVersion: createType(registry, 'u32', info.specVersion).toHex(),
    tip: createType(
      registry,
      'Compact<Balance>',
      info.tip || DEFAULTS.tip
    ).toHex(),
    version: EXTRINSIC_VERSION
  };
}

/**
 * From a PolkadotJs `Call` type, get a serializable object representing the
 * call.
 *
 * @param registry - The type registry
 * @param method - The method to serialize
 */
export function toTxMethod(registry: TypeRegistry, method: Call): TxMethod {
  // Mapping of argName->argType
  const argsDef = JSON.parse(method.Type.args);
  // Mapping of argName->argValue
  const args = Object.keys(argsDef).reduce((accumulator, key, index) => {
    const codec = createTypeUnsafe(registry, argsDef[key], [
      method.args[index]
    ]);

    accumulator[stringCamelCase(key)] = codec.toJSON();
    return accumulator;
  }, {} as Args);

  return {
    args,
    name: method.methodName,
    pallet: method.sectionName
  };
}

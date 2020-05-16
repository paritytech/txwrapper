/**
 * @ignore
 */ /** */

import { createTypeUnsafe, TypeRegistry } from '@polkadot/types';
import { Call } from '@polkadot/types/interfaces';
import { AnyJson } from '@polkadot/types/types';
import { stringCamelCase } from '@polkadot/util';

import { EXTRINSIC_VERSION } from './constants';
import { createDecorated } from './metadata';
import { BaseTxInfo, OptionsWithMeta, UnsignedTransaction } from './types';

/**
 * Default values for tx info, if the user doesn't specify any
 */
const DEFAULTS = {
  /**
   * Don't add any tip by default.
   */
  tip: 0,
  /**
   * Construct a mortal extrinsic of ~6m24s minutes.
   */
  eraPeriod: 64,
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
export function createMethod(
  info: TxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  const { metadataRpc, registry } = options;
  const metadata = createDecorated(registry, metadataRpc);

  const methodFunction = metadata.tx[info.method.pallet][info.method.name];
  const method = methodFunction(
    ...methodFunction.meta.args.map((arg) => {
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

  // We were accepting `validityPeriod` field, in seconds, before using
  // `eraPeriod`, in blocks. This piece of code assures backward-compatibility.
  if (info.validityPeriod) {
    console.warn(
      'The `validityPeriod` field in tx info is now deprecated. Please use `eraPeriod`, the period now being in blocks instead of seconds.'
    );
  }
  const eraPeriod =
    // If `info.eraPeriod` is set, use it.
    info.eraPeriod ||
    // For backwards-compatibility, also see if `info.validityPeriod` is set,
    // with a block time of 6s.
    (info.validityPeriod && info.validityPeriod / 6) ||
    // As last resort, take the default value.
    DEFAULTS.eraPeriod;

  return {
    address: info.address,
    blockHash: info.blockHash,
    blockNumber: registry.createType('BlockNumber', info.blockNumber).toHex(),
    era: registry
      .createType('ExtrinsicEra', {
        current: info.blockNumber,
        period: eraPeriod,
      })
      .toHex(),
    genesisHash: info.genesisHash,
    metadataRpc,
    method,
    nonce: registry.createType('Compact<Index>', info.nonce).toHex(),
    specVersion: registry.createType('u32', info.specVersion).toHex(),
    tip: registry
      .createType('Compact<Balance>', info.tip || DEFAULTS.tip)
      .toHex(),
    version: EXTRINSIC_VERSION,
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
      method.args[index],
    ]);

    accumulator[stringCamelCase(key)] = codec.toJSON();
    return accumulator;
  }, {} as Args);

  return {
    args,
    name: method.methodName,
    pallet: method.sectionName,
  };
}

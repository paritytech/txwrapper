import Decorated from '@polkadot/metadata/Decorated';
import { Metadata, TypeRegistry } from '@polkadot/types';
import { getSpecTypes } from '@polkadot/types-known';
import memoizee from 'memoizee';

import {
  KUSAMA_SS58_FORMAT,
  POLKADOT_SS58_FORMAT,
  WESTEND_SS58_FORMAT,
} from './constants';

/**
 * JSON object of ChainProperties codec from `@polkadot/api`.
 */
export interface ChainProperties {
  ss58Format: number;
  tokenDecimals: number;
  tokenSymbol: string;
}

/**
 * Hardcode some chain properties of known chains. These are normally returned
 * by `system_properties` call, but since they don't change much, it's pretty
 * safe to hardcode them.
 *
 * @ignore
 * @todo Should we expose this publicly?
 */
const defaultChainProperties: Record<string, ChainProperties> = {
  Kusama: {
    ss58Format: KUSAMA_SS58_FORMAT,
    tokenDecimals: 12,
    tokenSymbol: 'KSM',
  },
  Polkadot: {
    ss58Format: POLKADOT_SS58_FORMAT,
    tokenDecimals: 12,
    tokenSymbol: 'DOT',
  },
  Westend: {
    ss58Format: WESTEND_SS58_FORMAT,
    tokenDecimals: 12,
    tokenSymbol: 'WND',
  },
};

/**
 * Given a chain name, a spec name, and a spec version, return the
 * corresponding type registry. This function only returns the correct type
 * registry for the following chains:
 * - Kusama,
 * - Polkadot,
 * - Westend.
 * For other chains, please use `@polkadot/api`s `TypeRegistry` directly.
 *
 * @see https://github.com/polkadot-js/api/tree/master/packages/types-known
 * @param chainName - The chain to create the type registry for. Returned by
 * RPC `system_chain`.
 * @param specName - The name of the runtime spec. Returned by RPC
 * `state_getRuntimeVersion`.
 * @param specVersion - The spec version of that chain for which we want to
 * create a type registry.Returned by RPC `state_getRuntimeVersion`.
 */
export function getRegistry(
  chainName: 'Kusama' | 'Polkadot' | 'Westend',
  specName: 'kusama' | 'polkadot' | 'westend',
  specVersion: number
): TypeRegistry {
  const registry = new TypeRegistry();
  // Register types specific to chain/runtimeVersion
  registry.register(getSpecTypes(registry, chainName, specName, specVersion));
  // Register the chain properties for this registry
  registry.setChainProperties(
    registry.createType('ChainProperties', defaultChainProperties[chainName])
  );

  return registry;
}

/**
 * From a metadata hex string (for example returned by RPC), create a Metadata
 * class instance. Metadata decoding is expensive, so this function is
 * memoized.
 *
 * @ignore
 * @param registry - The registry of the metadata.
 * @param metadata - The metadata as hex string.
 */
function createMetadataUnmemoized(
  registry: TypeRegistry,
  metadataRpc: string
): Metadata {
  return new Metadata(registry, metadataRpc);
}

/**
 * @ignore
 */
export const createMetadata = memoizee(createMetadataUnmemoized, {
  length: 2,
});

/**
 * From a metadata hex string (for example returned by RPC), create a Decorated
 * object.
 *
 * @ignore
 * @param registry - The registry of the metadata.
 * @param metadata - The metadata as hex string.
 */
export function createDecorated(
  registry: TypeRegistry,
  metadataRpc: string
): Decorated {
  return new Decorated(registry, createMetadata(registry, metadataRpc));
}

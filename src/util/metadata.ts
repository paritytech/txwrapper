import Decorated from '@polkadot/metadata/Decorated';
import { Metadata, TypeRegistry } from '@polkadot/types';
import { getSpecTypes } from '@polkadot/types-known';
import memoizee from 'memoizee';

/**
 * Create a specific TypeRegistry for the current chain. The reason we have
 * this is, depending on different runtime versions, we have different types
 * (e.g.: session keys went from 4 to 5 keys). Here we hardcode which runtime
 * version's types we wish to use.
 *
 * @see https://github.com/polkadot-js/api/tree/master/packages/types-known
 * @param specName - The chain to create the type registry for.
 * @param specVersion - The spec version of that chain for which we want to
 * create a type registry.
 */
export function getRegistry(
  chainName: 'Kusama' | 'Polkadot' | 'Westend',
  specName: 'kusama' | 'polkadot' | 'westend',
  // FIXME Now using 9999 so that it's bigger than any previous spec version,
  // which will thus use the latest spec version.
  specVersion = 9999
): TypeRegistry {
  const registry = new TypeRegistry();
  // Register types specific to chain/runtimeVersion
  registry.register(getSpecTypes(registry, chainName, specName, specVersion));

  return registry;
}

/**
 * From a metadata hex string (for example returned by RPC), create a Metadata
 * object. Metadata decoding is expensive, so this function is memoized.
 *
 * @param registry - The registry of the metadata.
 * @param metadata - The metadata as hex string.
 */
function createMetadataUnmemoized(
  registry: TypeRegistry,
  metadata: string
): Metadata {
  return new Metadata(registry, metadata);
}

export const createMetadata = memoizee(createMetadataUnmemoized, {
  length: 2,
});

/**
 * From a metadata hex string (for example returned by RPC), create a Decorated
 * object.
 *
 * @param registry - The registry of the metadata.
 * @param metadata - The metadata as hex string.
 */
export function createDecorated(
  registry: TypeRegistry,
  metadata: string
): Decorated {
  return new Decorated(registry, createMetadata(registry, metadata));
}

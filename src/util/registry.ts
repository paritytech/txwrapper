import { createType, TypeRegistry } from '@polkadot/types';
import { getSpecTypes } from '@polkadot/types/known';

/**
 * Create a specific TypeRegistry for a current chain. The reason we have this
 * is, depending on different runtime versions, we have different types (e.g.:
 * session keys went from 4 to 5 keys). Here we hardcode which runtime
 * version's types we wish to use.
 *
 * @see https://github.com/polkadot-js/api/blob/master/packages/types/src/known/overrides.ts
 * @param chain - The chain to create t
 */
export function getRegistry(
  // FIXME: Cater for Polkadot
  specName: 'kusama' = 'kusama',
  // FIXME: Make this hardcoded version user-customizable
  specVersion = 1042
): TypeRegistry {
  const registry = new TypeRegistry();
  // Register types specific to chain/runtimeVersion
  registry.register(
    getSpecTypes(
      createType(registry, 'Text'), // Unneeded for now
      createType(registry, 'RuntimeVersion', {
        specName,
        specVersion
      })
    )
  );

  return registry;
}

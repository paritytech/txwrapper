import { TypeRegistry } from '@polkadot/types';
import { getSpecTypes } from '@polkadot/types-known';

import { KUSAMA_SS58_FORMAT } from './constants';

/**
 * Create a specific TypeRegistry for a current chain. The reason we have this
 * is, depending on different runtime versions, we have different types (e.g.:
 * session keys went from 4 to 5 keys). Here we hardcode which runtime
 * version's types we wish to use.
 *
 * @see https://github.com/polkadot-js/api/blob/master/packages/types/src/known/overrides.ts
 * @param specName - The chain to create the type registry for.
 * @param specVersion - The spec version of that chain for which we want to
 * create a type registry.
 */
export function getRegistry(
  chain: 'Kusama' | 'Polkadot' | 'Westend',
  specName: 'kusama' | 'polkadot' | 'westend',
  // FIXME Now using 9999 so that it's bigger than any previous spec version,
  // which will thus use the latest spec version.
  specVersion = 9999
): TypeRegistry {
  const registry = new TypeRegistry();
  // Register types specific to chain/runtimeVersion
  registry.register(
    getSpecTypes(
      registry,
      registry.createType('Text', chain),
      registry.createType('Text', specName),
      registry.createType('u32', specVersion)
    )
  );

  return registry;
}

/**
 * Runtime-specific options for encoding and decoding transactions.
 */
export interface Options {
  /**
   * The metadata of the runtime.
   */
  metadata: string;
  /**
   * The type registry of the runtime. Defaults to Kusama's type registry
   */
  registry?: TypeRegistry;
  /**
   * The SS58 prefix of the chain. Defaults to 2 (Kusama).
   */
  ss58Format?: number;
}

export const defaultOptions = {
  ss58Format: KUSAMA_SS58_FORMAT,
  typeRegistry: getRegistry('Kusama', 'kusama'),
};

/**
 * Sanitize the options that the user pass in. In particular, the second
 * argument can either be a string (the metadata) or an Options object. Also
 * apply defaults for SS58 prefix and registry to Kusama.
 *
 * @param metadataOrOptions
 * @param ss58Format
 */
export function sanitizeOptions(
  metadataOrOptions: string | Options,
  ss58Format = KUSAMA_SS58_FORMAT
): Required<Options> {
  // Passing a string as second argument (for metadataRpc) is deprecated. We
  // still add the following check for backwards-compatibility.
  if (typeof metadataOrOptions === 'string') {
    return {
      metadata: metadataOrOptions,
      registry: getRegistry('Kusama', 'kusama'),
      ss58Format,
    };
  } else {
    return {
      metadata: metadataOrOptions.metadata,
      registry: metadataOrOptions.registry || getRegistry('Kusama', 'kusama'),
      ss58Format: metadataOrOptions.ss58Format || KUSAMA_SS58_FORMAT,
    };
  }
}

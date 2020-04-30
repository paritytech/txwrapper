import { TypeRegistry } from '@polkadot/types';

import { KUSAMA_SS58_FORMAT } from './constants';
import { getRegistry } from './metadata';

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
   * @deprecated Please use `registry.setChainProperties()` instead, and pass the correct SS58 prefix in the chain properties.
   *
   * The SS58 prefix of the chain. Defaults to 2 (Kusama).
   */
  ss58Format?: number;
}

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
    console.warn(
      'Passing metadataRpc as string is deprecated. Please pass an object with `metadata` field.'
    );

    return {
      metadata: metadataOrOptions,
      registry: getRegistry('Kusama', 'kusama', 9999), // Use 9999 to always use latest type overrides by default
      ss58Format,
    };
  } else {
    return {
      metadata: metadataOrOptions.metadata,
      registry:
        metadataOrOptions.registry || getRegistry('Kusama', 'kusama', 9999), // Use 9999 to always use latest type overrides by default
      // We return `ss58Format`, but it's deprecated, and actually never used in the codebase anymore
      ss58Format: metadataOrOptions.ss58Format || KUSAMA_SS58_FORMAT,
    };
  }
}

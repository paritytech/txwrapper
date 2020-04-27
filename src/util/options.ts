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

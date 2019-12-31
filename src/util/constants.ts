/**
 * Prefix for SS58-encoded addresses on Kusama.
 */
export const KUSAMA_SS58_FORMAT = 2;
/**
 * Prefix for SS58-encoded addresses on Polkadot.
 */
export const POLKADOT_SS58_FORMAT = 0;

/**
 * Latest extrinsic version.
 */
export const EXTRINSIC_VERSION = 4;

// Useful constants for calculting an Era.
/**
 * @ignore
 */
export const BLOCKTIME = 6; // in s
/**
 * @ignore
 */
export const ONE_SECOND = 1 / BLOCKTIME;

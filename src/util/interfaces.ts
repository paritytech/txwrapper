import { SignerPayloadJSON } from '@polkadot/types/types';

/**
 * JSON format for an unsigned transaction.
 */
export interface UnsignedTransaction extends SignerPayloadJSON {
  /**
   * The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
   * call `state_getMetadata`.
   */
  metadataRpc: string;
}

/**
 * JSON format for information that is common to all transactions.
 */
export interface BaseTxInfo {
  /**
   * The ss-58 encoded address of the sending account.
   */
  address: string;
  /**
   * The checkpoint hash of the block, in hex.
   */
  blockHash: string;
  /**
   * The checkpoint block number (u32), in hex.
   */
  blockNumber: number;
  /**
   * The genesis hash of the chain, in hex.
   */
  genesisHash: string;
  /**
   * The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
   * call `state_getMetadata`.
   */
  metadataRpc: string;
  /**
   * The nonce for this transaction.
   */
  nonce: number;
  /**
   * The current spec version for the runtime.
   */
  specVersion: number;
  /**
   * The tip for this transaction, in hex.
   */
  tip: number;
  /**
   * The amount of time (in second) the transaction is valid for. Will be
   * translated into a mortal era.
   */
  validityPeriod: number;
}

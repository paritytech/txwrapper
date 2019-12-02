import Metadata from '@polkadot/metadata';
import { createType, TypeRegistry } from '@polkadot/types';
import { SignerPayloadJSON } from '@polkadot/types/types';

import { EXTRINSIC_VERSION } from './util/constants';

/**
 * JSON format for an unsigned transaction
 */
export interface UnsignedTransaction extends SignerPayloadJSON {} // eslint-disable-line @typescript-eslint/no-empty-interface

export interface TxInfo {
  /**
   * The ss-58 encoded address
   */
  address: string;
  /**
   * The amount to send
   */
  amount: number;
  /**
   * The checkpoint hash of the block, in hex
   */
  blockHash: string;
  /**
   * The checkpoint block number (u32), in hex
   */
  blockNumber: number;
  /**
   * The genesis hash of the chain, in hex
   */
  genesisHash: string;
  /**
   * The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
   * call `state_getMetadata`
   */
  metadataRpc: string;
  /**
   * The nonce for this transaction,
   */
  nonce: number;
  /**
   * The current spec version for the runtime
   */
  specVersion: number;
  /**
   * The tip for this transaction, in hex
   */
  tip: number;
  /**
   * The recipient address, ss-58 encoded
   */
  to: string;
}

// Calculting Era. The default here allows for 240min mortal eras.
const BLOCKTIME = 6;
const ONE_MINUTE = 60 / BLOCKTIME;
const DEFAULT_MORTAL_LENGTH = 240 * ONE_MINUTE;

/**
 * Construct a balance transfer transaction offline. Transactions can be
 * constructed in such a way that it is valid for at least 240 minutes
 *
 * @param info - Information required to construct the transaction
 * @param amount -
 */
export function balanceTransfer(info: TxInfo): UnsignedTransaction {
  const registry = new TypeRegistry();
  const metadata = new Metadata(registry, info.metadataRpc);

  const method = metadata.tx.balances.transfer(info.to, info.amount).toHex();

  return {
    address: info.address,
    blockHash: info.blockHash,
    blockNumber: createType(registry, 'BlockNumber', info.blockNumber).toHex(),
    era: createType(registry, 'ExtrinsicEra', {
      current: info.blockNumber,
      period: DEFAULT_MORTAL_LENGTH
    }).toHex(),
    genesisHash: info.genesisHash,
    method,
    nonce: createType(registry, 'Compact<Index>', info.nonce).toHex(),
    specVersion: createType(registry, 'u32', info.specVersion).toHex(),
    tip: createType(registry, 'Compact<Balance>', info.tip).toHex(),
    version: EXTRINSIC_VERSION
  };
}

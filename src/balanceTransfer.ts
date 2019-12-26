import Metadata from '@polkadot/metadata';
import { createType, TypeRegistry } from '@polkadot/types';
import { EXTRINSIC_VERSION, ONE_SECOND } from './util/constants';
import { UnsignedTransaction } from './util/interfaces';

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
   * Use balances::transfer_keep_alive instead of balances::transfer
   */
  keepAlive?: boolean;
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
  /**
   * The amount of time (in second) the transaction is valid for. Will be
   * translated into a mortal era
   */
  validityPeriod: number;
}

/**
 * Construct a balance transfer transaction offline. Transactions can be
 * constructed in such a way that they are valid for at least 240 minutes.
 *
 * @param info - Information required to construct the transaction.
 */
export function balanceTransfer(info: TxInfo): UnsignedTransaction {
  const registry = new TypeRegistry();
  const metadata = new Metadata(registry, info.metadataRpc);

  const transfer = info.keepAlive
    ? metadata.tx.balances.transferKeepAlive
    : metadata.tx.balances.transfer;
  const method = transfer(info.to, info.amount).toHex();

  return {
    address: info.address,
    blockHash: info.blockHash,
    blockNumber: createType(registry, 'BlockNumber', info.blockNumber).toHex(),
    era: createType(registry, 'ExtrinsicEra', {
      current: info.blockNumber,
      period: ONE_SECOND * info.validityPeriod
    }).toHex(),
    genesisHash: info.genesisHash,
    metadataRpc: info.metadataRpc,
    method,
    nonce: createType(registry, 'Compact<Index>', info.nonce).toHex(),
    specVersion: createType(registry, 'u32', info.specVersion).toHex(),
    tip: createType(registry, 'Compact<Balance>', info.tip).toHex(),
    version: EXTRINSIC_VERSION
  };
}

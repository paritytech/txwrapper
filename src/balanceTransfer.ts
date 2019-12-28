import Metadata from '@polkadot/metadata';
import { createType, TypeRegistry } from '@polkadot/types';

import { EXTRINSIC_VERSION, ONE_SECOND } from './util/constants';
import { BaseTxInfo, UnsignedTransaction } from './util/interfaces';

export interface TxInfoTransfer extends BaseTxInfo {
  /**
   * The amount to send.
   */
  amount: number;
  /**
   * Use `balances::transfer_keep_alive` instead of `balances::transfer`.
   */
  keepAlive?: boolean;
  /**
   * The recipient address, SS-58 encoded.
   */
  to: string;
}

/**
 * Construct a balance transfer transaction offline. Transactions can be
 * constructed in such a way that they are valid for at least 240 minutes.
 *
 * @param info - Information required to construct the transaction.
 */
export function balanceTransfer(info: TxInfoTransfer): UnsignedTransaction {
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

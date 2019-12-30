import Metadata from '@polkadot/metadata';
import { createType, TypeRegistry } from '@polkadot/types';

import { createMethod } from '../../util/method';
import { BaseTxInfo, UnsignedTransaction } from '../../util/types';

export interface TxInfoTransfer extends BaseTxInfo {
  /**
   * The recipient address, SS-58 encoded.
   */
  dest: string;
  /**
   * The amount to send.
   */
  value: number;
}

/**
 * Construct a balance transfer transaction offline.
 *
 * @param info - Information required to construct the transaction.
 */
export function transfer(info: TxInfoTransfer): UnsignedTransaction {}

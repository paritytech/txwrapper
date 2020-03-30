import {
  Args,
  BaseTxInfo,
  createMethod,
  UnsignedTransaction,
} from '../../util';

export interface BalancesTransferArgs extends Args {
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
export function transfer(
  args: BalancesTransferArgs,
  info: BaseTxInfo
): UnsignedTransaction {
  return createMethod({
    method: {
      args,
      name: 'transfer',
      pallet: 'balances',
    },
    ...info,
  });
}

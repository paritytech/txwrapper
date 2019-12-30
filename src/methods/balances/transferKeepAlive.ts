import { createMethod } from '../../util/method';
import { BaseTxInfo, UnsignedTransaction } from '../../util/types';
import { BalancesTransferArgs } from './transfer';

export type BalancesTransferKeepAliveArgs = BalancesTransferArgs;

/**
 * Construct a balance transfer transaction offline.
 *
 * @param info - Information required to construct the transaction.
 */
export function transferKeepAlive(
  args: BalancesTransferKeepAliveArgs,
  info: BaseTxInfo
): UnsignedTransaction {
  return createMethod({
    method: {
      args,
      name: 'transferKeepAlive',
      pallet: 'balances'
    },
    ...info
  });
}

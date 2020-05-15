import {
  BaseTxInfo,
  createMethod,
  EncodeOptions,
  UnsignedTransaction,
} from '../../util';
import { BalancesTransferArgs } from './transfer';

export type BalancesTransferKeepAliveArgs = BalancesTransferArgs;

/**
 * Construct a balance transfer transaction offline.
 *
 * @param info - Information required to construct the transaction.
 */
export function transferKeepAlive(
  args: BalancesTransferKeepAliveArgs,
  info: BaseTxInfo,
  options: EncodeOptions
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'transferKeepAlive',
        pallet: 'balances',
      },
      ...info,
    },
    options
  );
}

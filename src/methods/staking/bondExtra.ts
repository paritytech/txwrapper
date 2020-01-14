import {
  Args,
  BaseTxInfo,
  createMethod,
  UnsignedTransaction
} from '../../util';

export interface StakingBondExtraArgs extends Args {
  /**
   * Add some extra amount that have appeared in the stash `free_balance` into
   * the balance up for staking
   */
  maxAdditional: number;
}

/**
 * Construct a transaction to bond funds and create a Stash account.
 *
 * @param info - Information required to construct the transaction.
 */
export function bondExtra(
  args: StakingBondExtraArgs,
  info: BaseTxInfo
): UnsignedTransaction {
  return createMethod({
    method: {
      args,
      name: 'bondExtra',
      pallet: 'staking'
    },
    ...info
  });
}

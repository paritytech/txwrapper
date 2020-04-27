import {
  Args,
  BaseTxInfo,
  createMethod,
  Options,
  UnsignedTransaction,
} from '../../util';

export interface StakingBondExtraArgs extends Args {
  /**
   * The maximum amount to bond.
   */
  maxAdditional: number;
}

/**
 * Add some extra amount that have appeared in the stash `free_balance` into
 * the balance up for staking.
 *
 * @param info - Information required to construct the transaction.
 */
export function bondExtra(
  args: StakingBondExtraArgs,
  info: BaseTxInfo,
  options?: Partial<Options>
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'bondExtra',
        pallet: 'staking',
      },
      ...info,
    },
    options
  );
}

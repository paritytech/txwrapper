import {
  Args,
  BaseTxInfo,
  createMethod,
  UnsignedTransaction
} from '../../util';

export interface StakingPayoutNominatorArgs extends Args {
  /**
   * May not be lower than one following the most recently paid era. If it is
   * higher, then it indicates an instruction to skip the payout of all
   * previous eras.
   */
  era: number;
  /**
   * List of all validators that `who` had exposure to during `era`. If it is
   * incomplete, then less than the full reward will be paid out. It must not
   * exceed `MAX_NOMINATIONS`.
   */
  validators: [string, number][];
}

/**
 * Make one nominator's payout for one era.
 * WARNING: once an era is payed for a validator such validator can't claim the
 * payout of previous era.
 * WARNING: Incorrect arguments here can result in loss of payout. Be very careful.
 *
 * @param info - Information required to construct the transaction.
 */
export function payoutNominator(
  args: StakingPayoutNominatorArgs,
  info: BaseTxInfo
): UnsignedTransaction {
  return createMethod({
    method: {
      args,
      name: 'payoutNominator',
      pallet: 'staking'
    },
    ...info
  });
}

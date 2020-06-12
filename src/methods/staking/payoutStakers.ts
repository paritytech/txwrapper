import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';

export interface StakingPayoutStakersArgs extends Args {
  /**
   * The stash account of the validator. Their nominators, up to,
   * `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
   */
  validatorStash: string;
  /**
   * May be any era between `[current_era - history_depth; current_era]`.
   */
  era: number;
}

/**
 *
 * Pay out all the stakers behind a single validator for a single era.
 *
 * The origin of this call must be _Signed_. Any account can call this function,
 *  even if it is not one of the stakers.
 *
 * This can only be called when [`EraElectionStatus`] is `Closed`.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function payoutStakers(
  args: StakingPayoutStakersArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'payoutStakers',
        pallet: 'staking',
      },
      ...info,
    },
    options
  );
}

import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';

export interface StakingSetPayeeArgs extends Args {
  /**
   * The `RewardDestination`. It can be one of 'Staking', 'Stash', or 'Controller'.
   */
  payee: string;
}

/**
 * (Re-)set the payment target for a controller.
 *
 * Effects will be felt at the beginning of the next era.
 *
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function setPayee(
  args: StakingSetPayeeArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'setPayee',
        pallet: 'staking',
      },
      ...info,
    },
    options
  );
}
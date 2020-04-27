import {
  Args,
  BaseTxInfo,
  createMethod,
  Options,
  UnsignedTransaction,
} from '../../util';

export interface VestingVestOtherArgs extends Args {
  /**
   * The account whose vested funds should be unlocked. Must have funds still
   * locked under this module.
   */
  target: string;
}

/**
 * Unlock any vested funds of a `target` account.
 *
 * @param info - Information required to construct the transaction.
 */
export function vestOther(
  args: VestingVestOtherArgs,
  info: BaseTxInfo,
  options?: Partial<Options>
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'vestOther',
        pallet: 'vesting',
      },
      ...info,
    },
    options
  );
}

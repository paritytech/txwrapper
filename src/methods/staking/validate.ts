import { Args, BaseTxInfo, createMethod, UnsignedTransaction } from '../../util';

export interface StakingValidateArgs extends Args {
  /**
   * Declare the desire to nominate `targets` for the origin controller.
   */
  targets: string[];
}

/**
 * Declare the desire to validate for the origin controller.
 *
 * @param info - Information required to construct the transaction.
 */
export function validate(
  args: StakingValidateArgs,
  info: BaseTxInfo
): UnsignedTransaction {
  return createMethod({
    method: {
      args,
      name: 'validate',
      pallet: 'staking'
    },
    ...info
  });
}

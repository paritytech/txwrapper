import {
  Args,
  BaseTxInfo,
  createMethod,
  UnsignedTransaction,
} from '../../util';

export interface StakingBondArgs extends Args {
  /**
   * The SS-58 encoded address of the Controller account.
   */
  controller: string;
  /**
   * The number of tokens to bond.
   */
  value: number;
  /**
   * The rewards destination. Can be "Stash", "Staked", or "Controller".
   */
  payee: string;
}

/**
 * Construct a transaction to bond funds and create a Stash account.
 *
 * @param info - Information required to construct the transaction.
 */
export function bond(
  args: StakingBondArgs,
  info: BaseTxInfo
): UnsignedTransaction {
  return createMethod({
    method: {
      args,
      name: 'bond',
      pallet: 'staking',
    },
    ...info,
  });
}

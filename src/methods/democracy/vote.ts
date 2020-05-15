import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';
import { AccountVote } from './types';

export interface DemocracyVoteArgs extends Args {
  /*
   * Referendum index.
   */
  refIndex: number;
  /**
   * Vote.
   */
  vote: AccountVote;
}

/**
 * Vote in a referendum.
 *
 * @param info - Information required to construct the transaction.
 */
export function vote(
  args: DemocracyVoteArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'vote',
        pallet: 'democracy',
      },
      ...info,
    },
    options
  );
}

import {
  Args,
  BaseTxInfo,
  createMethod,
  Options,
  UnsignedTransaction,
} from '../../util';
import { AccountVote } from './types';

export interface DemocracyProxyVoteArgs extends Args {
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
 * Vote in a referendum on behalf of a stash.
 *
 * @param info - Information required to construct the transaction.
 */
export function proxyVote(
  args: DemocracyProxyVoteArgs,
  info: BaseTxInfo,
  options?: Partial<Options>
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'proxyVote',
        pallet: 'democracy',
      },
      ...info,
    },
    options
  );
}

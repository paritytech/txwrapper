import {
  Args,
  BaseTxInfo,
  createMethod,
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
  info: BaseTxInfo
): UnsignedTransaction {
  return createMethod({
    method: {
      args,
      name: 'proxyVote',
      pallet: 'democracy',
    },
    ...info,
  });
}

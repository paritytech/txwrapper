import {
  Args,
  BaseTxInfo,
  createMethod,
  UnsignedTransaction
} from '../../util';

export interface DemocracySetProxyArgs extends Args {
  /**
   * Address to set as proxy, SS-58 encoded.
   */
  proxy: string;
}

/**
 * Specify a proxy. Called by the stash.
 *
 * @param info - Information required to construct the transaction.
 */
export function setProxy(
  args: DemocracySetProxyArgs,
  info: BaseTxInfo
): UnsignedTransaction {
  return createMethod({
    method: {
      args,
      name: 'setProxy',
      pallet: 'democracy'
    },
    ...info
  });
}

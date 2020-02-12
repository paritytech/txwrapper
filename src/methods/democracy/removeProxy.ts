import {
  Args,
  BaseTxInfo,
  createMethod,
  UnsignedTransaction
} from '../../util';

export interface DemocracyRemoveProxyArgs extends Args {
  /**
   * The address of the proxy to remove, SS-58 encoded.
   */
  proxy: string;
}

/**
 * Clear the proxy. Called by the stash.
 *
 * @param info - Information required to construct the transaction.
 */
export function removeProxy(
  args: DemocracyRemoveProxyArgs,
  info: BaseTxInfo
): UnsignedTransaction {
  return createMethod({
    method: {
      args,
      name: 'removeProxy',
      pallet: 'democracy'
    },
    ...info
  });
}

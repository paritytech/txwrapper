import {
  Args,
  BaseTxInfo,
  createMethod,
  UnsignedTransaction,
} from '../../util';

export interface DemocracyDeactivateProxyArgs extends Args {
  /**
   * The address of the proxy to remove, SS-58 encoded.
   */
  proxy: string;
}

/**
 * Deactivate the proxy, but leave open to this account. Called by the stash.
 * The proxy must already be active.
 *
 * @param info - Information required to construct the transaction.
 */
export function deactivateProxy(
  args: DemocracyDeactivateProxyArgs,
  info: BaseTxInfo
): UnsignedTransaction {
  return createMethod({
    method: {
      args,
      name: 'deactivateProxy',
      pallet: 'democracy',
    },
    ...info,
  });
}

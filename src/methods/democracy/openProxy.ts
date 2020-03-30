import {
  Args,
  BaseTxInfo,
  createMethod,
  UnsignedTransaction,
} from '../../util';

export interface DemocracyOpenProxyArgs extends Args {
  /**
   * The address of the proxy to remove, SS-58 encoded.
   */
  target: string;
}

/**
 * Become a proxy. This must be called prior to a later `activateProxy`.
 *
 * @param info - Information required to construct the transaction.
 */
export function openProxy(
  args: DemocracyOpenProxyArgs,
  info: BaseTxInfo
): UnsignedTransaction {
  return createMethod({
    method: {
      args,
      name: 'openProxy',
      pallet: 'democracy',
    },
    ...info,
  });
}

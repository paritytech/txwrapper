import {
  Args,
  BaseTxInfo,
  createMethod,
  Options,
  UnsignedTransaction,
} from '../../util';

export interface DemocracyActivateProxyArgs extends Args {
  /**
   * Address to set as proxy, SS-58 encoded.
   */
  proxy: string;
}

/**
 * Specify a proxy that is already open to us. Called by the stash.
 *
 * @param info - Information required to construct the transaction.
 */
export function activateProxy(
  args: DemocracyActivateProxyArgs,
  info: BaseTxInfo,
  options?: Partial<Options>
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'activateProxy',
        pallet: 'democracy',
      },
      ...info,
    },
    options
  );
}

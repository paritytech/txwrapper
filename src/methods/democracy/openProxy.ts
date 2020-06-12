import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
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
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function openProxy(
  args: DemocracyOpenProxyArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'openProxy',
        pallet: 'democracy',
      },
      ...info,
    },
    options
  );
}

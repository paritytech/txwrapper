import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';

export interface ProxyProxy extends Args {
  /**
   * Dispatch the given `call` from an account that the sender is authorised for
   *  through, `add_proxy`.
   */
  real: string;
  /**
   * Specify the exact proxy type to be used and checked for this call.
   */
  forceProxyType: string;
  /**
   * The call to be made by the `real` account.
   * To take advantage of txwrapper methods, this could be UnsignedTransaction.method.
   */
  call: { callIndex?: string; args?: string } | string;
}

/**
 * Register a proxy account for the sender that is able to make calls on its behalf.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function proxy(
  args: ProxyProxy,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'proxy',
        pallet: 'proxy',
      },
      ...info,
    },
    options
  );
}

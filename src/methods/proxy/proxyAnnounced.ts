import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';

export interface ProxyProxyAnnouncedArgs extends Args {
  /**
   * The account that previously announced the call.
   */
  delegate: string;
  /**
   * The account that the proxy will make a call on behalf of.
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

export function proxyAnnounced(
  args: ProxyProxyAnnouncedArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'proxyAnnounced',
        pallet: 'proxy',
      },
      ...info,
    },
    options
  );
}

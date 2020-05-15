import {
  BaseTxInfo,
  createMethod,
  EncodeOptions,
  UnsignedTransaction,
} from '../../util';

/**
 * Clear the proxy. Called by the proxy.
 *
 * @param info - Information required to construct the transaction.
 */
export function closeProxy(
  args: {},
  info: BaseTxInfo,
  options: EncodeOptions
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'closeProxy',
        pallet: 'democracy',
      },
      ...info,
    },
    options
  );
}

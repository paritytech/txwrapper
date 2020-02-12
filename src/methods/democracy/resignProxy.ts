import { BaseTxInfo, createMethod, UnsignedTransaction } from '../../util';

/**
 * Clear the proxy. Called by the proxy.
 *
 * @param info - Information required to construct the transaction.
 */
export function resignProxy(args: {}, info: BaseTxInfo): UnsignedTransaction {
  return createMethod({
    method: {
      args,
      name: 'resignProxy',
      pallet: 'democracy'
    },
    ...info
  });
}

import {
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';
import { ProxyAddProxy } from './addProxy';

/**
 * Unregister a proxy account for the sender.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */

export function removeProxy(
  args: ProxyAddProxy,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'removeProxy',
        pallet: 'proxy',
      },
      ...info,
    },
    options
  );
}

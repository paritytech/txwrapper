import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';

// enum ProxyType { // Would this be helpful?
//   Any = 'Any',
//   NonTransfer = 'NonTransfer',
//   Governance = 'Governance',
//   Staking = 'Staking',
//   SudoBalances = 'SudoBalances',
// }

export interface ProxyAddProxy extends Args {
  /**
   * The account that the `caller` would like to make a proxy
   */
  proxy: string;
  /**
   * The permissions allowed for this proxy account.
   * As of Polkadot v7 types are (Any, NonTransfer, Governance, Staking, SudoBalances).
   */
  proxyType: string; //TODO does this need to be an enum
}

/**
 * Register a proxy account for the sender that is able to make calls on its behalf.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function addProxy(
  args: ProxyAddProxy,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'addProxy',
        pallet: 'proxy',
      },
      ...info,
    },
    options
  );
}

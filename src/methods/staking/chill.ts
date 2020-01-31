import { BaseTxInfo, createMethod, UnsignedTransaction } from '../../util';

/**
 *Declare no desire to either validate or nominate.
 *
 * @param info - Information required to construct the transaction.
 */
export function chill(args: {}, info: BaseTxInfo): UnsignedTransaction {
  return createMethod({
    method: {
      args,
      name: 'chill',
      pallet: 'staking'
    },
    ...info
  });
}

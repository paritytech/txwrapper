import { BaseTxInfo, createMethod, UnsignedTransaction } from '../../util';

/**
 * Declare the desire to validate for the origin controller.
 *
 * @param info - Information required to construct the transaction.
 */
export function chill(
  args: {},
  info: BaseTxInfo
): UnsignedTransaction {
  return createMethod({
    method: {
      args,
      name: 'chill',
      pallet: 'staking'
    },
    ...info
  });
}

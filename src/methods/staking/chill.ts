import {
  BaseTxInfo,
  createMethod,
  EncodeOptions,
  UnsignedTransaction,
} from '../../util';

/**
 * Declare the desire to cease validating or nominating. Does not unbond funds.
 *
 * @param info - Information required to construct the transaction.
 */
export function chill(
  args: {},
  info: BaseTxInfo,
  options: EncodeOptions
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'chill',
        pallet: 'staking',
      },
      ...info,
    },
    options
  );
}

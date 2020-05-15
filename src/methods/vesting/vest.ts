import {
  BaseTxInfo,
  createMethod,
  EncodeOptions,
  UnsignedTransaction,
} from '../../util';

/**
 * Unlock any vested funds of the sender account.
 *
 * @param info - Information required to construct the transaction.
 */
export function vest(
  args: {},
  info: BaseTxInfo,
  options: EncodeOptions
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'vest',
        pallet: 'vesting',
      },
      ...info,
    },
    options
  );
}

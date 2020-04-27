import {
  BaseTxInfo,
  createMethod,
  Options,
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
  options?: Partial<Options>
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

import {
  BaseTxInfo,
  createMethod,
  Options,
  UnsignedTransaction,
} from '../../util';

/**
 * Remove any unlocked chunks from the `unlocking` queue from our management.
 *
 * @param info - Information required to construct the transaction.
 */
export function withdrawUnbonded(
  args: {},
  info: BaseTxInfo,
  options?: Partial<Options>
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'withdrawUnbonded',
        pallet: 'staking',
      },
      ...info,
    },
    options
  );
}

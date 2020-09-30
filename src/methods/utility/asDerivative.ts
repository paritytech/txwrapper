import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';

export interface UtilityAsDerivativeArgs extends Args {
  /**
   * The sub-account index of the origin.
   */
  index: number | string;
  /**
   * The call to be dispatched from pseudonym account derived from the origin.
   * To take advantage of txwrapper methods, this could be an array of
   * UnsignedTransaction.method.
   */
  call: { callIndex?: string; args?: string } | string;
}

export function asDerivative(
  args: UtilityAsDerivativeArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'asDerivative',
        pallet: 'utility',
      },
      ...info,
    },
    options
  );
}

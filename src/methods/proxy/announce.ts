import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';

interface ProxyAnnounceArgs extends Args {
  /**
   * The account that the proxy will make a call on behalf of.
   */
  real: string;
  /**
   * The hash of the call to be made by the `real` account.
   */
  callHash: string;
}

/**
 * Publish the hash of a proxy-call that will be made in the future.
 *
 * This must be called some number of blocks before the corresponding `proxy` is attempted
 * if the delay associated with the proxy relationship is greater than zero.
 *
 * No more than `MaxPending` announcements may be made at any one time.
 *
 * This will take a deposit of `AnnouncementDepositFactor` as well as
 * `AnnouncementDepositBase` if there are no other pending announcements.
 *
 * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function announce(
  args: ProxyAnnounceArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'announce',
        pallet: 'proxy',
      },
      ...info,
    },
    options
  );
}

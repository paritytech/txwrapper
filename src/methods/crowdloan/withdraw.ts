import {
	Args,
	BaseTxInfo,
	createMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '../../util';

export interface CroadloanWithdrawArgs extends Args {
	who: string;
	index: number | string;
}

export function withdraw(
	args: CroadloanWithdrawArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return createMethod(
		{
			method: {
				args,
				name: 'withdraw',
				pallet: 'crowdloan',
			},
			...info,
		},
		options
	);
}

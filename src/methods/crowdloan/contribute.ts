import {
	Args,
	BaseTxInfo,
	createMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '../../util';
import { MultiSignature } from './types';

export interface CrowdloanContributeArgs extends Args {
	index: number | string;
	value: number | string;
	signature: MultiSignature;
}

export function contribute(
	args: CrowdloanContributeArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return createMethod(
		{
			method: {
				args,
				name: 'contribute',
				pallet: 'crowdloan',
			},
			...info,
		},
		options
	);
}

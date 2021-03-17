import {
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
	testBaseTxInfo,
	WND_50_TEST_OPTIONS,
} from '../../util';
import { withdraw } from './withdraw';

describe('crowdloan::withdraw', () => {
	it('should work', () => {
		const unsigned = withdraw(
			TEST_METHOD_ARGS.crowdloan.withdraw,
			TEST_BASE_TX_INFO,
			WND_50_TEST_OPTIONS
		);

		testBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x2a0290b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe2230'
		);
	});
});

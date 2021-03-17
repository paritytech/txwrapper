import {
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
	testBaseTxInfo,
	WND_50_TEST_OPTIONS,
} from '../../util';
import { contribute } from './contribute';

describe('crowdloan::contribute', () => {
	it('should work', () => {
		const unsigned = contribute(
			TEST_METHOD_ARGS.crowdloan.contribute,
			TEST_BASE_TX_INFO,
			WND_50_TEST_OPTIONS
		);

		testBaseTxInfo(unsigned);

		expect(unsigned.method).toBe(
			'0x2a013013f6ffffffffff3f010101ffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
		);
	});
});

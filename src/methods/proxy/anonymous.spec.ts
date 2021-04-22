import {
	DOT_23_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
	testBaseTxInfo,
} from '../../util';
import { anonymous } from './anonymous';

describe('proxy::anonymous', () => {
	it('should work', () => {
		const unsigned = anonymous(
			TEST_METHOD_ARGS.proxy.anonymous,
			TEST_BASE_TX_INFO,
			DOT_23_TEST_OPTIONS
		);

		testBaseTxInfo(unsigned);

		expect(unsigned.method).toBe('0x1d04001e0000000100');
	});
});

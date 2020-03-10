import {
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  testBaseTxInfo
} from '../../util';
import { vest } from './vest';

describe('vesting::vest', () => {
  it('should work', () => {
    const unsigned = vest(TEST_METHOD_ARGS.vesting.vest, TEST_BASE_TX_INFO);

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe('0x1a00');
  });
});

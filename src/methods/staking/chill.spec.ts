import {
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  testBaseTxInfo,
} from '../../util';
import { chill } from './chill';

describe('staking::chill', () => {
  it('should work', () => {
    const unsigned = chill(TEST_METHOD_ARGS.staking.chill, TEST_BASE_TX_INFO);

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe('0x0706');
  });
});

import {
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  TEST_OPTIONS,
  testBaseTxInfo,
} from '../../util';
import { chill } from './chill';

describe('staking::chill', () => {
  it('should work', () => {
    const unsigned = chill(
      TEST_METHOD_ARGS.staking.chill,
      TEST_BASE_TX_INFO,
      TEST_OPTIONS
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe('0x0706');
  });
});

import {
  TEST_BASE_TX_INFO,
  TEST_STAKING_UNBOND_ARGS,
  testBaseTxInfo
} from '../../util';
import { unbond } from './unbond';

describe('unbond', () => {
  it('should work', () => {
    const unsigned = unbond(TEST_STAKING_UNBOND_ARGS, TEST_BASE_TX_INFO);

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe('0x07029101');
  });
});

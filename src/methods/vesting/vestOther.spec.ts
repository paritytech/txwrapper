import {
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  testBaseTxInfo
} from '../../util';
import { vestOther } from './vestOther';

describe('vesting::vestOther', () => {
  it('should work', () => {
    const unsigned = vestOther(
      TEST_METHOD_ARGS.vesting.vestOther,
      TEST_BASE_TX_INFO
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe(
      '0x1a01ff90b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22'
    );
  });
});

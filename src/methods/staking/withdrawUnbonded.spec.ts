import {
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  TEST_OPTIONS,
  testBaseTxInfo,
} from '../../util';
import { withdrawUnbonded } from './withdrawUnbonded';

describe('staking::withdrawUnbonded', () => {
  it('should work', () => {
    const unsigned = withdrawUnbonded(
      TEST_METHOD_ARGS.staking.withdrawUnbonded,
      TEST_BASE_TX_INFO,
      TEST_OPTIONS
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe('0x0703');
  });
});

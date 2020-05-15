import {
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  TEST_REGISTRY,
  testBaseTxInfo,
} from '../../util';
import { withdrawUnbonded } from './withdrawUnbonded';

describe('staking::withdrawUnbonded', () => {
  it('should work', () => {
    const unsigned = withdrawUnbonded(
      TEST_METHOD_ARGS.staking.withdrawUnbonded,
      TEST_BASE_TX_INFO,
      { registry: TEST_REGISTRY }
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe('0x0703');
  });
});

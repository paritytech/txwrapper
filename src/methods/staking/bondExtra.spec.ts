import {
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  TEST_OPTIONS,
  testBaseTxInfo,
} from '../../util';
import { bondExtra } from './bondExtra';

describe('staking::bondExtra', () => {
  it('should encode', () => {
    const unsigned = bondExtra(
      TEST_METHOD_ARGS.staking.bondExtra,
      TEST_BASE_TX_INFO,
      TEST_OPTIONS
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe('0x07019101');
  });
});

import {
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  testBaseTxInfo,
} from '../../util';
import { validate } from './validate';

describe('staking::validate', () => {
  it('should work', () => {
    const unsigned = validate(
      TEST_METHOD_ARGS.staking.validate,
      TEST_BASE_TX_INFO
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe('0x070414');
  });
});

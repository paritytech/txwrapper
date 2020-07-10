import {
  CC1_TEST_BASE_TX_INFO,
  CC1_TEST_OPTIONS,
  cC1TestBaseTxInfo,
  // cC1TestBaseTxInfo,
  TEST_METHOD_ARGS,
} from '../../util';
import { batch } from './batch';

describe('utility::batch', () => {
  it('should work', () => {
    const unsigned = batch(
      TEST_METHOD_ARGS.utility.batch,
      CC1_TEST_BASE_TX_INFO,
      CC1_TEST_OPTIONS
    );

    cC1TestBaseTxInfo(unsigned);

    expect(unsigned.method).toBe('0x010004050030672121');
  });
});

import {
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  TEST_REGISTRY,
  testBaseTxInfo,
} from '../../util';
import { payoutNominator } from './payoutNominator';

describe('staking::payoutNominator', () => {
  it('should work', () => {
    const unsigned = payoutNominator(
      TEST_METHOD_ARGS.staking.payoutNominator,
      TEST_BASE_TX_INFO,
      { registry: TEST_REGISTRY }
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe(
      '0x071064000000048eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4802000000'
    );
  });
});

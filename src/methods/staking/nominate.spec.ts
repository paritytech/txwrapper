import {
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  testBaseTxInfo
} from '../../util';
import { nominate } from './nominate';

describe('staking::nominate', () => {
  it('should work', () => {
    const unsigned = nominate(
      TEST_METHOD_ARGS.staking.nominate,
      TEST_BASE_TX_INFO
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe(
      '0x070508ff8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48ff90b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22'
    );
  });
});

import { TEST_BASE_TX_INFO, testBaseTxInfo } from '../../util/testUtil';
import { nominate } from './nominate';

describe('nominate', () => {
  it('should work', () => {
    const unsigned = nominate(
      {
        targets: [
          'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP', // seed "//Bob"
          'Fr4NzY1udSFFLzb2R3qxVQkwz9cZraWkyfH4h3mVVk7BK7P' // seed "//Charlie"
        ]
      },
      TEST_BASE_TX_INFO
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe(
      '0x070508ff8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48ff90b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22'
    );
  });
});

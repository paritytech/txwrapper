import { testBaseTxInfo, TEST_BASE_TX_INFO } from '../../util/testUtil';
import { bond } from './bond';

describe('bond', () => {
  it('should work', () => {
    const unsigned = bond(
      {
        controller: 'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP', // seed "//Bob"
        value: 100,
        payee: 'Staked'
      },
      TEST_BASE_TX_INFO
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe(
      '0x0700ff8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48910100'
    );
  });
});

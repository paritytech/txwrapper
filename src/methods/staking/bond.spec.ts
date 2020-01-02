import {
  TEST_BASE_TX_INFO,
  TEST_STAKING_BOND_ARGS,
  testBaseTxInfo
} from '../../util';
import { bond } from './bond';

describe('bond', () => {
  it('should work', () => {
    const unsigned = bond(TEST_STAKING_BOND_ARGS, TEST_BASE_TX_INFO);

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe(
      '0x0700ff8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48910100'
    );
  });
});

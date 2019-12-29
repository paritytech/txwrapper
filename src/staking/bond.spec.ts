import { TEST_BOND_TX_INFO } from '../util/testUtil';
import { bond } from './bond';

describe('bond', () => {
  it('should work', () => {
    const unsigned = bond(TEST_BOND_TX_INFO);

    (['address', 'blockHash', 'genesisHash'] as const).forEach(key =>
      expect(unsigned[key]).toBe(TEST_BOND_TX_INFO[key])
    );
    expect(unsigned.blockNumber).toBe('0x0041a58e');
    expect(unsigned.era).toBe('0xeb58');
    expect(unsigned.method).toBe(
      '0x0700ff8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48910100'
    );
    expect(unsigned.nonce).toBe('0x00000002');
    expect(unsigned.specVersion).toBe('0x000003fb');
    expect(unsigned.tip).toBe('0x00000000000000000000000000000000');
    expect(unsigned.version).toBe(4);
  });
});

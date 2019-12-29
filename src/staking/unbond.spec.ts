import { TEST_UNBOND_TX_INFO } from '../util/testUtil';
import { unbond } from './unbond';

describe('unbond', () => {
  it('should work', () => {
    const unsigned = unbond(TEST_UNBOND_TX_INFO);

    (['address', 'blockHash', 'genesisHash'] as const).forEach(key =>
      expect(unsigned[key]).toBe(TEST_UNBOND_TX_INFO[key])
    );
    expect(unsigned.blockNumber).toBe('0x0041a58e');
    expect(unsigned.era).toBe('0xeb58');
    expect(unsigned.method).toBe('0x07029101');
    expect(unsigned.nonce).toBe('0x00000002');
    expect(unsigned.specVersion).toBe('0x000003fb');
    expect(unsigned.tip).toBe('0x00000000000000000000000000000000');
    expect(unsigned.version).toBe(4);
  });
});

import { balanceTransfer } from './balanceTransfer';
import { TEST_TX_INFO } from './util/testUtil';

describe('balanceTransfer', () => {
  it('should work', () => {
    const unsigned = balanceTransfer(TEST_TX_INFO);

    (['address', 'blockHash', 'genesisHash'] as const).forEach(key =>
      expect(unsigned[key]).toBe(TEST_TX_INFO[key])
    );
    expect(unsigned.blockNumber).toBe('0x0041a58e');
    expect(unsigned.era).toBe('0xeb58');
    expect(unsigned.method).toBe(
      '0x0600ff96074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30'
    );
    expect(unsigned.nonce).toBe('0x00000002');
    expect(unsigned.specVersion).toBe('0x000003fb');
    expect(unsigned.tip).toBe('0x00000000000000000000000000000000');
    expect(unsigned.version).toBe(4);
  });
});

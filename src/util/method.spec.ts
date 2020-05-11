import { createMethod } from './method';
import { TEST_BASE_TX_INFO } from './testUtil';

describe('createMethod', () => {
  it('should create a default validity period of 5 minutes', () => {
    const txBaseInfo = {
      ...TEST_BASE_TX_INFO,
      eraPeriod: undefined,
    };
    const unsigned = createMethod({
      ...txBaseInfo,
      method: {
        args: {},
        name: 'withdrawUnbonded',
        pallet: 'staking',
      },
    });

    expect(unsigned.era).toBe('0xe500');
  });

  it('should be backwards-compatible with validityPeriod', () => {
    const txBaseInfo = {
      ...TEST_BASE_TX_INFO,
      eraPeriod: undefined,
      validityPeriod: 7200, // 2h
    };
    const unsigned = createMethod({
      ...txBaseInfo,
      method: {
        args: {},
        name: 'withdrawUnbonded',
        pallet: 'staking',
      },
    });

    expect(unsigned.era).toBe('0xea58');
  });
});

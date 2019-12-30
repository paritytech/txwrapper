import { TEST_BASE_TX_INFO, testBaseTxInfo } from '../../util/testUtil';
import { unbond } from './unbond';

describe('unbond', () => {
  it('should work', () => {
    const unsigned = unbond({ value: 100 }, TEST_BASE_TX_INFO);

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe('0x07029101');
  });
});

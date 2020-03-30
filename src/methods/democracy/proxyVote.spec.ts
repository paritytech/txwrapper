import {
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  testBaseTxInfo,
} from '../../util';
import { proxyVote } from './proxyVote';

describe('democracy::proxyVote', () => {
  it('should work', () => {
    const unsigned = proxyVote(
      TEST_METHOD_ARGS.democracy.proxyVote,
      TEST_BASE_TX_INFO
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe('0x09030081');
  });
});

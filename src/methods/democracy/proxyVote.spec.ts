import {
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  TEST_REGISTRY,
  testBaseTxInfo,
} from '../../util';
import { proxyVote } from './proxyVote';

describe('democracy::proxyVote', () => {
  it('should work', () => {
    const unsigned = proxyVote(
      TEST_METHOD_ARGS.democracy.proxyVote,
      TEST_BASE_TX_INFO,
      { registry: TEST_REGISTRY }
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe(
      '0x0903000081d2040000000000000000000000000000'
    );
  });
});

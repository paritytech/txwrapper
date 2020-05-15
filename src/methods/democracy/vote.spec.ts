import {
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  TEST_REGISTRY,
  testBaseTxInfo,
} from '../../util';
import { vote } from './vote';

describe('democracy::vote', () => {
  it('should work', () => {
    const unsigned = vote(TEST_METHOD_ARGS.democracy.vote, TEST_BASE_TX_INFO, {
      registry: TEST_REGISTRY,
    });

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe(
      '0x0902000081d2040000000000000000000000000000'
    );
  });
});

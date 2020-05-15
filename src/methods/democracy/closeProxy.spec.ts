import {
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  TEST_REGISTRY,
  testBaseTxInfo,
} from '../../util';
import { closeProxy } from './closeProxy';

describe('democracy::closeProxy', () => {
  it('should work', () => {
    const unsigned = closeProxy(
      TEST_METHOD_ARGS.democracy.closeProxy,
      TEST_BASE_TX_INFO,
      { registry: TEST_REGISTRY }
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe('0x090d');
  });
});

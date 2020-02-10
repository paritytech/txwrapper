import {
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  testBaseTxInfo
} from '../../util';
import { setProxy } from './setProxy';

describe('democracy::setProxy', () => {
  it('should work', () => {
    const unsigned = setProxy(
      TEST_METHOD_ARGS.democracy.setProxy,
      TEST_BASE_TX_INFO
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe('...');
  });
});

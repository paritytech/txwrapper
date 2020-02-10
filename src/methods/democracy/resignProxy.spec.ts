import {
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  testBaseTxInfo
} from '../../util';
import { resignProxy } from './resignProxy';

describe('democracy::resignProxy', () => {
  it('should work', () => {
    const unsigned = resignProxy(
      TEST_METHOD_ARGS.democracy.resignProxy,
      TEST_BASE_TX_INFO
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe('...');
  });
});

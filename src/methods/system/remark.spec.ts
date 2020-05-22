import {
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  TEST_OPTIONS,
  testBaseTxInfo,
} from '../../util';
import { remark } from './remark';

describe('system::remark', () => {
  it('should work', () => {
    const unsigned = remark(
      TEST_METHOD_ARGS.system.remark,
      TEST_BASE_TX_INFO,
      TEST_OPTIONS
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe('0x00011042194253');
  });
});

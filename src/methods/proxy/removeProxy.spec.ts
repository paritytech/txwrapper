import {
  CC1_TEST_BASE_TX_INFO,
  CC1_TEST_OPTIONS,
  cC1TestBaseTxInfo,
  TEST_METHOD_ARGS,
} from '../../util';
import { removeProxy } from './removeProxy';

describe('proxy::removeProxy', () => {
  it('should work', () => {
    const unsigned = removeProxy(
      TEST_METHOD_ARGS.proxy.addProxy,
      CC1_TEST_BASE_TX_INFO,
      CC1_TEST_OPTIONS
    );

    cC1TestBaseTxInfo(unsigned);

    expect(unsigned.method).toBe(
      '0x1c028eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4800'
    );
  });
});

import {
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  testBaseTxInfo,
} from '../../util';
import { setController } from './setController';

describe('staking::setController', () => {
  it('should work', () => {
    const unsigned = setController(
      TEST_METHOD_ARGS.staking.setController,
      TEST_BASE_TX_INFO
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe(
      '0x07088eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48'
    );
  });
});

import {
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  TEST_REGISTRY,
  testBaseTxInfo,
} from '../../util';
import { transferKeepAlive } from './transferKeepAlive';

describe('balances::transferKeepAlive', () => {
  it('should work', () => {
    const unsigned = transferKeepAlive(
      TEST_METHOD_ARGS.balances.transferKeepAlive,
      TEST_BASE_TX_INFO,
      { registry: TEST_REGISTRY }
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe(
      '0x060396074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30'
    );
  });
});

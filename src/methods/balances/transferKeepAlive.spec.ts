import {
  TEST_BALANCES_TRANSFER_ARGS,
  TEST_BASE_TX_INFO,
  testBaseTxInfo
} from '../../util';
import { transferKeepAlive } from './transferKeepAlive';

describe('balances::transferKeepAlive', () => {
  it('should work', () => {
    const unsigned = transferKeepAlive(
      TEST_BALANCES_TRANSFER_ARGS,
      TEST_BASE_TX_INFO
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe(
      '0x0603ff96074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30'
    );
  });
});

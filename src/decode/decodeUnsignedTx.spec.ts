import { balanceTransfer } from '../balanceTransfer';
import { metadataRpc, TEST_TRANSFER_TX_INFO } from '../util/testUtil';
import { decodeUnsignedTx } from './decodeUnsignedTx';

describe('decodeSignedTx', () => {
  it('should work', () => {
    const unsigned = balanceTransfer(TEST_TRANSFER_TX_INFO);
    const txInfo = decodeUnsignedTx(unsigned, metadataRpc);

    ([
      'address',
      'amount',
      'blockHash',
      'blockNumber',
      'genesisHash',
      'keepAlive',
      'metadataRpc',
      'nonce',
      'specVersion',
      'tip',
      'to'
    ] as const).forEach(key =>
      expect(txInfo[key]).toBe(TEST_TRANSFER_TX_INFO[key])
    );

    expect(txInfo.validityPeriod).toBeGreaterThanOrEqual(
      TEST_TRANSFER_TX_INFO.validityPeriod
    );
  });
});

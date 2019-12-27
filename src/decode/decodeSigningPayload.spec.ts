import { balanceTransfer } from '../balanceTransfer';
import { createSigningPayload } from '../createSigningPayload';
import { metadataRpc, TEST_TRANSFER_TX_INFO } from '../util/testUtil';
import { decodeSigningPayload } from './decodeSigningPayload';

describe('decodeSigningPayload', () => {
  it('should work', () => {
    const signingPayload = createSigningPayload(
      balanceTransfer(TEST_TRANSFER_TX_INFO)
    );

    const txInfo = decodeSigningPayload(signingPayload, metadataRpc);

    ([
      'amount',
      'blockHash',
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

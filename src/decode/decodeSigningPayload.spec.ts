import { balanceTransfer } from '../balanceTransfer';
import { createSigningPayload } from '../createSigningPayload';
import { nominate } from '../staking/nominate';
import {
  metadataRpc,
  TEST_NOMINATE_TX_INFO,
  TEST_TRANSFER_TX_INFO
} from '../util/testUtil';
import { decodeSigningPayload } from './decodeSigningPayload';

describe('decodeSigningPayload', () => {
  it('should decode SigningPayload balance transfer', () => {
    const signingPayload = createSigningPayload(
      balanceTransfer(TEST_TRANSFER_TX_INFO)
    );

    const txInfo = decodeSigningPayload(signingPayload, metadataRpc);

    ([
      'blockHash',
      'genesisHash',
      'metadataRpc',
      'nonce',
      'specVersion',
      'tip'
    ] as const).forEach(key =>
      expect(txInfo[key]).toBe(TEST_TRANSFER_TX_INFO[key])
    );

    (['keepAlive', 'amount', 'to'] as const).forEach(key =>
      expect(txInfo.methodData[key]).toBe(TEST_TRANSFER_TX_INFO[key])
    );

    expect(txInfo.validityPeriod).toBeGreaterThanOrEqual(
      TEST_TRANSFER_TX_INFO.validityPeriod
    );
  });

  it('should decode SigningPayload nominate', () => {
    const signingPayload = createSigningPayload(
      nominate(TEST_NOMINATE_TX_INFO)
    );

    const txInfo = decodeSigningPayload(signingPayload, metadataRpc);

    ([
      'blockHash',
      'genesisHash',
      'metadataRpc',
      'nonce',
      'specVersion',
      'tip'
    ] as const).forEach(key =>
      expect(txInfo[key]).toBe(TEST_NOMINATE_TX_INFO[key])
    );

    (['targets'] as const).forEach(key =>
      expect(
        txInfo.methodData[key]
          .replace(' ', '')
          .replace('[', '')
          .replace(']', '') // TODO: make not hideous
      ).toBe(TEST_NOMINATE_TX_INFO[key].toString())
    );

    expect(txInfo.validityPeriod).toBeGreaterThanOrEqual(
      TEST_NOMINATE_TX_INFO.validityPeriod
    );
  });
});

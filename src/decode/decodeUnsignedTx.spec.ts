import { balanceTransfer } from '../balanceTransfer';
import { unbond } from '../staking/unbond';
import { KUSAMA_SS58_FORMAT } from '../util/constants';
import {
  metadataRpc,
  TEST_TRANSFER_TX_INFO,
  TEST_UNBOND_TX_INFO
} from '../util/testUtil';
import { decodeUnsignedTx } from './decodeUnsignedTx';

describe('decodeSignedTx', () => {
  it('should decode SignedTx balance transfer', () => {
    const unsigned = balanceTransfer(TEST_TRANSFER_TX_INFO);
    const txInfo = decodeUnsignedTx(unsigned, metadataRpc, KUSAMA_SS58_FORMAT);

    ([
      'address',
      'blockHash',
      'blockNumber',
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

  it('should decode SignedTx unbond', () => {
    const unsigned = unbond(TEST_UNBOND_TX_INFO);
    const txInfo = decodeUnsignedTx(unsigned, metadataRpc);

    ([
      'address',
      'blockHash',
      'blockNumber',
      'genesisHash',
      'metadataRpc',
      'nonce',
      'specVersion',
      'tip'
    ] as const).forEach(key =>
      expect(txInfo[key]).toBe(TEST_UNBOND_TX_INFO[key])
    );

    (['value'] as const).forEach(key =>
      expect(txInfo.methodData[key]).toBe(TEST_UNBOND_TX_INFO[key])
    );

    expect(txInfo.validityPeriod).toBeGreaterThanOrEqual(
      TEST_UNBOND_TX_INFO.validityPeriod
    );
  });
});

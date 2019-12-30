import { balanceTransfer } from '../balanceTransfer';
import { createSignedTx } from '../createSignedTx';
import { createSigningPayload } from '../createSigningPayload';
import {
  metadataRpc,
  signWithAlice,
  TEST_TRANSFER_TX_INFO
} from '../util/testUtil';
import { decode } from './decode';

describe('decode', () => {
  it('should decode signedTx', async done => {
    const unsigned = balanceTransfer(TEST_TRANSFER_TX_INFO);
    const signingPayload = createSigningPayload(unsigned);
    const signature = await signWithAlice(signingPayload);

    const signedTx = createSignedTx(unsigned, signature);

    const txInfo = decode(signedTx, metadataRpc);

    (['address', 'metadataRpc', 'nonce', 'tip'] as const).forEach(key =>
      expect(txInfo[key]).toBe(TEST_TRANSFER_TX_INFO[key])
    );

    (['keepAlive', 'amount', 'to'] as const).forEach(key =>
      expect(txInfo.methodData[key]).toBe(TEST_TRANSFER_TX_INFO[key])
    );

    expect(txInfo.validityPeriod).toBeGreaterThanOrEqual(
      TEST_TRANSFER_TX_INFO.validityPeriod
    );

    done();
  });

  it('decode unsigned tx', () => {
    const unsigned = balanceTransfer(TEST_TRANSFER_TX_INFO);
    const txInfo = decode(unsigned, metadataRpc);

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

  it('should decode signing payload', done => {
    const unsigned = balanceTransfer(TEST_TRANSFER_TX_INFO);
    const signingPayload = createSigningPayload(unsigned);

    const txInfo = decode(signingPayload, metadataRpc);

    ([
      // 'blockHash',
      // 'genesisHash',
      'metadataRpc',
      'nonce',
      // 'specVersion',
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

    done();
  });
});

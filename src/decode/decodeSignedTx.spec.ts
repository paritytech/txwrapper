import { balanceTransfer } from '../balanceTransfer';
import { createSignedTx } from '../createSignedTx';
import { createSigningPayload } from '../createSigningPayload';
import { bond } from '../staking/bond';
import {
  metadataRpc,
  signWithAlice,
  TEST_BOND_TX_INFO,
  TEST_TRANSFER_TX_INFO
} from '../util/testUtil';
import { decodeSignedTx } from './decodeSignedTx';

describe('decodeSignedTx', () => {
  it('should decode SignedTx balance transfer', async done => {
    const unsigned = balanceTransfer(TEST_TRANSFER_TX_INFO);
    const signingPayload = createSigningPayload(unsigned);
    const signature = await signWithAlice(signingPayload);

    const signedTx = createSignedTx(unsigned, signature);

    const txInfo = decodeSignedTx(signedTx, metadataRpc);

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

  it('should decode SignedTx bond', async done => {
    const unsigned = bond(TEST_BOND_TX_INFO);
    const signingPayload = createSigningPayload(unsigned);
    const signature = await signWithAlice(signingPayload);

    const signedTx = createSignedTx(unsigned, signature);

    const txInfo = decodeSignedTx(signedTx, metadataRpc);

    (['address', 'metadataRpc', 'nonce', 'tip'] as const).forEach(key =>
      expect(txInfo[key]).toBe(TEST_BOND_TX_INFO[key])
    );

    (['controller', 'value', 'payee'] as const).forEach(key =>
      expect(txInfo.methodData[key]).toBe(TEST_BOND_TX_INFO[key])
    );

    expect(txInfo.validityPeriod).toBeGreaterThanOrEqual(
      TEST_BOND_TX_INFO.validityPeriod
    );

    done();
  });
});

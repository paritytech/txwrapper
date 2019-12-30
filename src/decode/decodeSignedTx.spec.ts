import { createSignedTx } from '../createSignedTx';
import { createSigningPayload } from '../createSigningPayload';
import { bond, transfer } from '../methods';
import {
  KUSAMA_SS58_FORMAT,
  metadataRpc,
  signWithAlice,
  TEST_BALANCES_TRANSFER_ARGS,
  TEST_BASE_TX_INFO,
  TEST_STAKING_BOND_ARGS
} from '../util';
import { DecodedSignedTx, decodeSignedTx } from './decodeSignedTx';

/**
 * Helper function to decode base tx info
 */
export function decodeBaseTxInfo(txInfo: DecodedSignedTx): void {
  (['address', 'metadataRpc', 'nonce', 'tip'] as const).forEach(key =>
    expect(txInfo[key]).toBe(TEST_BASE_TX_INFO[key])
  );
  expect(txInfo.validityPeriod).toBeGreaterThanOrEqual(
    TEST_BASE_TX_INFO.validityPeriod
  );
}

describe('decodeSignedTx', () => {
  it('should decode balances::transfer', async done => {
    const unsigned = transfer(TEST_BALANCES_TRANSFER_ARGS, TEST_BASE_TX_INFO);
    const signingPayload = createSigningPayload(unsigned);
    const signature = await signWithAlice(signingPayload);

    const signedTx = createSignedTx(unsigned, signature);

    const txInfo = decodeSignedTx(signedTx, metadataRpc, KUSAMA_SS58_FORMAT);

    decodeBaseTxInfo(txInfo);
    expect(txInfo.method.pallet).toBe('balances');
    expect(txInfo.method.name).toBe('transfer');
    expect(txInfo.method.args).toEqual(TEST_BALANCES_TRANSFER_ARGS);

    done();
  });

  it('should decode staking::bond', async done => {
    const unsigned = bond(TEST_STAKING_BOND_ARGS, TEST_BASE_TX_INFO);
    const signingPayload = createSigningPayload(unsigned);
    const signature = await signWithAlice(signingPayload);

    const signedTx = createSignedTx(unsigned, signature);

    const txInfo = decodeSignedTx(signedTx, metadataRpc);

    decodeBaseTxInfo(txInfo);
    expect(txInfo.method.pallet).toBe('staking');
    expect(txInfo.method.name).toBe('bond');
    expect(txInfo.method.args).toEqual(TEST_STAKING_BOND_ARGS);

    done();
  });
});

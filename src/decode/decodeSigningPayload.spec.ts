import { createSigningPayload } from '../createSigningPayload';
import { balances, staking } from '../methods';
import {
  KUSAMA_SS58_FORMAT,
  metadataRpc,
  TEST_BALANCES_TRANSFER_ARGS,
  TEST_BASE_TX_INFO,
  TEST_STAKING_NOMINATE_ARGS
} from '../util';
import {
  DecodedSigningPayload,
  decodeSigningPayload
} from './decodeSigningPayload';

/**
 * Helper function to decode base tx info
 */
export function decodeBaseTxInfo(txInfo: DecodedSigningPayload): void {
  ([
    'blockHash',
    'genesisHash',
    'metadataRpc',
    'nonce',
    'specVersion',
    'tip'
  ] as const).forEach(key => expect(txInfo[key]).toBe(TEST_BASE_TX_INFO[key]));
}

describe('decodeSigningPayload', () => {
  it('should decode balances::transfer', () => {
    const signingPayload = createSigningPayload(
      balances.transfer(TEST_BALANCES_TRANSFER_ARGS, TEST_BASE_TX_INFO)
    );
    const txInfo = decodeSigningPayload(
      signingPayload,
      metadataRpc,
      KUSAMA_SS58_FORMAT
    );

    decodeBaseTxInfo(txInfo);
    expect(txInfo.method.pallet).toBe('balances');
    expect(txInfo.method.name).toBe('transfer');
    expect(txInfo.method.args).toEqual(TEST_BALANCES_TRANSFER_ARGS);
  });

  it('should decode staking::nominate', () => {
    const signingPayload = createSigningPayload(
      staking.nominate(TEST_STAKING_NOMINATE_ARGS, TEST_BASE_TX_INFO)
    );
    const txInfo = decodeSigningPayload(signingPayload, metadataRpc);

    decodeBaseTxInfo(txInfo);
    expect(txInfo.method.pallet).toBe('staking');
    expect(txInfo.method.name).toBe('nominate');
    expect(txInfo.method.args).toEqual(TEST_STAKING_NOMINATE_ARGS);
  });
});

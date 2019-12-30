import { balances, staking } from '../methods';
import {
  KUSAMA_SS58_FORMAT,
  metadataRpc,
  TEST_BALANCES_TRANSFER_ARGS,
  TEST_BASE_TX_INFO,
  TEST_STAKING_UNBOND_ARGS,
  TxInfo
} from '../util';
import { decodeUnsignedTx } from './decodeUnsignedTx';

/**
 * Helper function to decode base tx info
 */
export function decodeBaseTxInfo(txInfo: TxInfo): void {
  ([
    'address',
    'blockHash',
    'blockNumber',
    'genesisHash',
    'metadataRpc',
    'nonce',
    'specVersion',
    'tip'
  ] as const).forEach(key => expect(txInfo[key]).toBe(TEST_BASE_TX_INFO[key]));
  expect(txInfo.validityPeriod).toBeGreaterThanOrEqual(
    TEST_BASE_TX_INFO.validityPeriod
  );
}

describe('decodeSignedTx', () => {
  it('should decode balances::transfer', () => {
    const unsigned = balances.transfer(
      TEST_BALANCES_TRANSFER_ARGS,
      TEST_BASE_TX_INFO
    );
    const txInfo = decodeUnsignedTx(unsigned, metadataRpc, KUSAMA_SS58_FORMAT);

    decodeBaseTxInfo(txInfo);
    expect(txInfo.method.pallet).toBe('balances');
    expect(txInfo.method.name).toBe('transfer');
    expect(txInfo.method.args).toEqual(TEST_BALANCES_TRANSFER_ARGS);
  });

  it('should decode staking::unbond', () => {
    const unsigned = staking.unbond(
      TEST_STAKING_UNBOND_ARGS,
      TEST_BASE_TX_INFO
    );
    const txInfo = decodeUnsignedTx(unsigned, metadataRpc, KUSAMA_SS58_FORMAT);

    decodeBaseTxInfo(txInfo);
    expect(txInfo.method.pallet).toBe('staking');
    expect(txInfo.method.name).toBe('unbond');
    expect(txInfo.method.args).toEqual(TEST_STAKING_UNBOND_ARGS);
  });
});

import * as methods from '../methods';
import {
  KUSAMA_SS58_FORMAT,
  metadataRpc,
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  TxInfo
} from '../util';
import { decodeUnsignedTx } from './decodeUnsignedTx';

/* eslint-disable @typescript-eslint/no-explicit-any */

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

/**
 * Test the [[decodeUnsignedTx]] function
 */
function testDecodeUnsignedTx(pallet: string, name: string): void {
  it(`should decode ${pallet}::${name}`, () => {
    const unsigned = (methods as any)[pallet][name](
      (TEST_METHOD_ARGS as any)[pallet][name],
      TEST_BASE_TX_INFO
    );
    const txInfo = decodeUnsignedTx(unsigned, metadataRpc, KUSAMA_SS58_FORMAT);

    decodeBaseTxInfo(txInfo);
    expect(txInfo.method.pallet).toBe(pallet);
    expect(txInfo.method.name).toBe(name);
    expect(txInfo.method.args).toEqual((TEST_METHOD_ARGS as any)[pallet][name]);
  });
}

describe('decodeUnsignedTx', () => {
  testDecodeUnsignedTx('balances', 'transfer');
  testDecodeUnsignedTx('balances', 'transferKeepAlive');
  testDecodeUnsignedTx('democracy', 'removeProxy');
  testDecodeUnsignedTx('democracy', 'resignProxy');
  testDecodeUnsignedTx('democracy', 'setProxy');
  // Skipping until Vote has correct JSON serialization in polkadot-api.
  // testDecodeUnsignedTx('democracy', 'proxyVote');
  // testDecodeUnsignedTx('democracy', 'vote');
  testDecodeUnsignedTx('session', 'setKeys');
  testDecodeUnsignedTx('staking', 'bond');
  testDecodeUnsignedTx('staking', 'bondExtra');
  testDecodeUnsignedTx('staking', 'chill');
  testDecodeUnsignedTx('staking', 'nominate');
  testDecodeUnsignedTx('staking', 'unbond');
  testDecodeUnsignedTx('staking', 'validate');
  testDecodeUnsignedTx('staking', 'withdrawUnbonded');
});

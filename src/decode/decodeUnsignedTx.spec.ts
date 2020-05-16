import * as methods from '../methods';
import {
  getAllMethods,
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  TEST_OPTIONS,
  TxInfo,
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
    'tip',
  ] as const).forEach((key) =>
    expect(txInfo[key]).toBe(TEST_BASE_TX_INFO[key])
  );

  // The actual period is the smallest power of 2 greater than the input
  // period.
  expect(txInfo.eraPeriod).toBeGreaterThanOrEqual(TEST_BASE_TX_INFO.eraPeriod);
}

/**
 * Test the [[decodeUnsignedTx]] function
 */
function testDecodeUnsignedTx(pallet: string, name: string): void {
  it(`should decode ${pallet}::${name}`, () => {
    const unsigned = (methods as any)[pallet][name](
      (TEST_METHOD_ARGS as any)[pallet][name],
      TEST_BASE_TX_INFO,
      TEST_OPTIONS
    );
    const txInfo = decodeUnsignedTx(unsigned, TEST_OPTIONS);

    decodeBaseTxInfo(txInfo);
    expect(txInfo.method.pallet).toBe(pallet);
    expect(txInfo.method.name).toBe(name);
    expect(txInfo.method.args).toEqual((TEST_METHOD_ARGS as any)[pallet][name]);
  });
}

describe('decodeUnsignedTx', () => {
  getAllMethods().forEach((method) => testDecodeUnsignedTx(...method));
});

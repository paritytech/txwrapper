import { createSignedTx } from '../createSignedTx';
import { createSigningPayload } from '../createSigningPayload';
import * as methods from '../methods';
import {
  getAllMethods,
  metadataRpc,
  signWithAlice,
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  TEST_REGISTRY,
} from '../util';
import { DecodedSignedTx, decodeSignedTx } from './decodeSignedTx';

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Helper function to decode base tx info
 */
export function decodeBaseTxInfo(txInfo: DecodedSignedTx): void {
  (['address', 'metadataRpc', 'nonce', 'tip'] as const).forEach((key) =>
    expect(txInfo[key]).toBe(TEST_BASE_TX_INFO[key])
  );

  // The actual period is the smallest power of 2 greater than the input
  // period.
  expect(txInfo.eraPeriod).toBeGreaterThanOrEqual(TEST_BASE_TX_INFO.eraPeriod);
}

/**
 * Test the [[decodeSignedTx]] function
 */
function testDecodeSignedTx(pallet: string, name: string): void {
  it(`should decode ${pallet}::${name}`, async (done) => {
    const unsigned = (methods as any)[pallet][name](
      (TEST_METHOD_ARGS as any)[pallet][name],
      TEST_BASE_TX_INFO,
      { registry: TEST_REGISTRY }
    );
    const signingPayload = createSigningPayload(unsigned, {
      registry: TEST_REGISTRY,
    });
    const signature = await signWithAlice(signingPayload);

    const signedTx = createSignedTx(unsigned, signature, {
      registry: TEST_REGISTRY,
    });

    const txInfo = decodeSignedTx(signedTx, {
      metadata: metadataRpc,
      registry: TEST_REGISTRY,
    });

    decodeBaseTxInfo(txInfo);
    expect(txInfo.method.pallet).toBe(pallet);
    expect(txInfo.method.name).toBe(name);
    expect(txInfo.method.args).toEqual((TEST_METHOD_ARGS as any)[pallet][name]);

    done();
  });
}

describe('decodeSignedTx', () => {
  getAllMethods().forEach((method) => testDecodeSignedTx(...method));
});

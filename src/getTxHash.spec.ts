import { createSignedTx } from './createSignedTx';
import { createSigningPayload } from './createSigningPayload';
import { getTxHash } from './getTxHash';
import { balances } from './methods';
import {
  signWithAlice,
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  TEST_OPTIONS,
} from './util/testUtil';

describe('getTxHash', () => {
  it('should work', async (done) => {
    const unsigned = balances.transferKeepAlive(
      TEST_METHOD_ARGS.balances.transfer,
      TEST_BASE_TX_INFO,
      TEST_OPTIONS
    );
    const signingPayload = createSigningPayload(unsigned, TEST_OPTIONS);
    const signature = await signWithAlice(signingPayload);
    const signedTx = createSignedTx(unsigned, signature, TEST_OPTIONS);

    const txHash = getTxHash(signedTx);
    expect(txHash).toBe(
      '0xf205271d8a94d8a3303bd4e262908e0d85ef45f414af7ef6c603fcf9ed354e41'
    );

    done();
  });
});

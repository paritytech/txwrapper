import { balanceTransfer } from './balanceTransfer';
import { createSignedTx } from './createSignedTx';
import { createSigningPayload } from './createSigningPayload';
import { decodeSignedTx } from './decodeSignedTx';
import { metadataRpc, signWithAlice, TEST_TX_INFO } from './util/testUtil';

describe('decodeSignedTx', () => {
  it('should work', async done => {
    const unsigned = balanceTransfer(TEST_TX_INFO);
    const signingPayload = createSigningPayload(unsigned);
    const signature = await signWithAlice(signingPayload);

    const signedTx = createSignedTx(unsigned, signature);

    const txInfo = decodeSignedTx(signedTx, metadataRpc);

    ([
      'address',
      'amount',
      'keepAlive',
      'nonce',
      'tip',
      'to'
    ] as const).forEach(key => expect(txInfo[key]).toBe(TEST_TX_INFO[key]));

    done();
  });
});

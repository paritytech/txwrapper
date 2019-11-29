import { balanceTransfer } from './balanceTransfer';
import { createSignedTx } from './createSignedTx';
import { createSigningPayload } from './createSigningPayload';
import { decodeTx } from './decodeTx';
import { metadataRpc, signWithAlice, TEST_TX_INFO } from './util/testUtil';

describe('decodeTx', () => {
  it('should work', async done => {
    const unsigned = balanceTransfer(TEST_TX_INFO);
    const signingPayload = createSigningPayload(unsigned);
    const signature = await signWithAlice(signingPayload);

    const tx = createSignedTx(unsigned, signature, metadataRpc);

    const txInfo = decodeTx(tx, metadataRpc);

    (['address', 'amount', 'nonce', 'tip', 'to'] as const).forEach(key =>
      expect(txInfo[key]).toBe(TEST_TX_INFO[key])
    );

    done();
  });
});

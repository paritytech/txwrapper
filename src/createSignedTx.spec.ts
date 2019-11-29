import { balanceTransfer } from './balanceTransfer';
import { createSignedTx } from './createSignedTx';
import { createSigningPayload } from './createSigningPayload';
import { metadataRpc, signWithAlice, TEST_TX_INFO } from './util/testUtil';

describe('createSignedTx', () => {
  it('should work', async done => {
    const unsigned = balanceTransfer(TEST_TX_INFO);
    const signingPayload = createSigningPayload(unsigned);
    const signature = await signWithAlice(signingPayload);

    const tx = createSignedTx(unsigned, signature, metadataRpc);
    expect(tx).toBe(
      '0x2d0284ffd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d003d0fdf8b55e6712b2766d80e9a4f527c3deb3d728a815db77df52d766643cdab3170e25ccd867a4d16c0a8f648b753cd95fed0b46ace6cc4e6e5942712409908eb5808000600ff96074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30'
    );

    done();
  });
});

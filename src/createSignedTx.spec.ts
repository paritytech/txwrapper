import { balanceTransfer } from './balanceTransfer';
import { createSignedTx } from './createSignedTx';
import { createSigningPayload } from './createSigningPayload';
import { signWithAlice, TEST_TX_INFO } from './util/testUtil';

describe('createSignedTx', () => {
  it('should work', async done => {
    const unsigned = balanceTransfer(TEST_TX_INFO);
    const signingPayload = createSigningPayload(unsigned);
    const signature = await signWithAlice(signingPayload);

    const tx = createSignedTx(unsigned, signature);
    expect(tx).toBe(
      '0x2d0284ffd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d00737ecfa4c54aae9e7d00a07e6e412f149e87a7543ed9afea48e469af4cb18a9aad0819710a34eb051970d992faf8fc50884139d9b4cdc43655481c7a3aaa4700eb5808000603ff96074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30'
    );

    done();
  });
});

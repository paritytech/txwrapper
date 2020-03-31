import { createSignedTx } from './createSignedTx';
import { createSigningPayload } from './createSigningPayload';
import { balances } from './methods';
import {
  signWithAlice,
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
} from './util/testUtil';

describe('createSignedTx', () => {
  it('should work', async (done) => {
    const unsigned = balances.transferKeepAlive(
      TEST_METHOD_ARGS.balances.transfer,
      TEST_BASE_TX_INFO
    );
    const signingPayload = createSigningPayload(unsigned);
    const signature = await signWithAlice(signingPayload);

    const tx = createSignedTx(unsigned, signature);
    expect(tx).toBe(
      '0x250284d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d003c2024784ab293a8d0e0eb87eb7ad5e0a44e45afdbb98304423b5ce354f805f4c79f6af039888e938c68f46f152791612991b79eb42b794dd33dfe36ce055104eb580800060396074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30'
    );

    done();
  });
});

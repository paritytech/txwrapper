import { balanceTransfer } from '../balanceTransfer';
import { createSignedTx } from '../createSignedTx';
import { createSigningPayload } from '../createSigningPayload';
import { metadataRpc, signWithAlice, TEST_TX_INFO } from '../util/testUtil';
import { decode } from './decode';

describe('decode', () => {
  it('should decode signedTx', async done => {
    const unsigned = balanceTransfer(TEST_TX_INFO);
    const signingPayload = createSigningPayload(unsigned);
    const signature = await signWithAlice(signingPayload);

    const signedTx = createSignedTx(
      unsigned.address,
      signingPayload,
      signature,
      unsigned.metadataRpc
    );

    const txInfo = decode(signedTx, metadataRpc);

    ([
      'amount',
      'keepAlive',
      'metadataRpc',
      'nonce',
      'tip',
      'to'
    ] as const).forEach(key => expect(txInfo[key]).toBe(TEST_TX_INFO[key]));

    expect(txInfo.validityPeriod).toBeGreaterThanOrEqual(
      TEST_TX_INFO.validityPeriod
    );

    done();
  });

  it('should decode signingPayload', () => {
    const signingPayload = createSigningPayload(balanceTransfer(TEST_TX_INFO));

    const txInfo = decode(signingPayload, metadataRpc);

    ([
      'amount',
      'keepAlive',
      'metadataRpc',
      'nonce',
      'tip',
      'to'
    ] as const).forEach(key => expect(txInfo[key]).toBe(TEST_TX_INFO[key]));

    expect(txInfo.validityPeriod).toBeGreaterThanOrEqual(
      TEST_TX_INFO.validityPeriod
    );
  });
});

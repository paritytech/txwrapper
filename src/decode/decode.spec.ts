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

    const signedTx = createSignedTx(unsigned, signature);

    const txInfo = decode(signedTx, metadataRpc);

    ([
      'address',
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

  it('decode unsigned tx', () => {
    const unsigned = balanceTransfer(TEST_TX_INFO);
    const txInfo = decode(unsigned, metadataRpc);

    ([
      'address',
      'amount',
      'blockHash',
      'blockNumber',
      'genesisHash',
      'keepAlive',
      'metadataRpc',
      'nonce',
      'specVersion',
      'tip',
      'to'
    ] as const).forEach(key => expect(txInfo[key]).toBe(TEST_TX_INFO[key]));

    expect(txInfo.validityPeriod).toBeGreaterThanOrEqual(
      TEST_TX_INFO.validityPeriod
    );
  });
});

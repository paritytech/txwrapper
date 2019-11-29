import { Keyring } from '@polkadot/api';
import { createType, TypeRegistry } from '@polkadot/types';
import { cryptoWaitReady } from '@polkadot/util-crypto';

import { createSignedTx } from './createSignedTx';
import { createSigningPayload } from './createSigningPayload';
import { TEST_TX_INFO } from './util/testUtil';
import { balanceTransfer } from './balanceTransfer';
import { decodeTx } from './decodeTx';

describe('parseTx', () => {
  it('should work', async done => {
    // We're creating an Alice account that will sign the payload
    // Wait for the promise to resolve async WASM
    await cryptoWaitReady();

    const registry = new TypeRegistry();
    // Use ed25519 because it has deterministic signatures
    const keyring = new Keyring({ type: 'ed25519' });
    const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });

    const unsigned = balanceTransfer(TEST_TX_INFO);
    const signingPayload = createSigningPayload(unsigned);

    const { signature } = createType(
      registry,
      'ExtrinsicPayload',
      signingPayload,
      {
        version: unsigned.version
      }
    ).sign(alice);

    const tx = createSignedTx(unsigned, signature);

    const txInfo = decodeTx(tx);

    expect(txInfo).toEqual(TEST_TX_INFO);
  });
});

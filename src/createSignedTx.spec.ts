import { Keyring } from '@polkadot/api';
import { createType, TypeRegistry } from '@polkadot/types';
import { cryptoWaitReady } from '@polkadot/util-crypto';

import { createSignedTx } from './createSignedTx';
import { createSigningPayload } from './createSigningPayload';
import { TEST_TX_INFO } from './util/testUtil';
import { balanceTransfer } from './balanceTransfer';

describe('createSignedTx', () => {
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

    expect(signature).toEqual(
      '0x003d0fdf8b55e6712b2766d80e9a4f527c3deb3d728a815db77df52d766643cdab3170e25ccd867a4d16c0a8f648b753cd95fed0b46ace6cc4e6e5942712409908'
    );

    const tx = createSignedTx(unsigned, signature);
    expect(tx).toBe('1324');

    done();
  });
});

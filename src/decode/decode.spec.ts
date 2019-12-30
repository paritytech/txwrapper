import { createSignedTx } from '../createSignedTx';
import { createSigningPayload } from '../createSigningPayload';
import { transfer } from '../methods';
import {
  metadataRpc,
  signWithAlice,
  TEST_BALANCES_TRANSFER_ARGS,
  TEST_BASE_TX_INFO
} from '../util';
import { decode } from './decode';
import { decodeBaseTxInfo as decodeSignedBase } from './decodeSignedTx.spec';
import { DecodedSigningPayload } from './decodeSigningPayload';
import { decodeBaseTxInfo as decodeSigningBase } from './decodeSigningPayload.spec';
import { decodeBaseTxInfo as decodeUnsignedBase } from './decodeUnsignedTx.spec';

describe('decode', () => {
  it('should decode signedTx', async done => {
    const unsigned = transfer(TEST_BALANCES_TRANSFER_ARGS, TEST_BASE_TX_INFO);
    const signingPayload = createSigningPayload(unsigned);
    const signature = await signWithAlice(signingPayload);

    const signedTx = createSignedTx(unsigned, signature);

    const txInfo = decode(signedTx, metadataRpc);

    decodeSignedBase(txInfo);
    expect(txInfo.method.pallet).toBe('balances');
    expect(txInfo.method.name).toBe('transfer');
    expect(txInfo.method.args).toEqual(TEST_BALANCES_TRANSFER_ARGS);

    done();
  });

  it('decode unsigned tx', () => {
    const unsigned = transfer(TEST_BALANCES_TRANSFER_ARGS, TEST_BASE_TX_INFO);
    const txInfo = decode(unsigned, metadataRpc);

    decodeUnsignedBase(txInfo);
    expect(txInfo.method.pallet).toBe('balances');
    expect(txInfo.method.name).toBe('transfer');
    expect(txInfo.method.args).toEqual(TEST_BALANCES_TRANSFER_ARGS);
  });

  it('should decode signing payload', done => {
    const unsigned = transfer(TEST_BALANCES_TRANSFER_ARGS, TEST_BASE_TX_INFO);
    const signingPayload = createSigningPayload(unsigned);

    const txInfo = decode(signingPayload, metadataRpc) as DecodedSigningPayload;

    decodeSigningBase(txInfo);
    expect(txInfo.method.pallet).toBe('balances');
    expect(txInfo.method.name).toBe('transfer');
    expect(txInfo.method.args).toEqual(TEST_BALANCES_TRANSFER_ARGS);

    done();
  });
});

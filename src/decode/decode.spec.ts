import { createSignedTx } from '../createSignedTx';
import { createSigningPayload } from '../createSigningPayload';
import { balances } from '../methods';
import {
  metadataRpc,
  signWithAlice,
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS
} from '../util';
import { decode } from './decode';
import { decodeBaseTxInfo as decodeSignedBase } from './decodeSignedTx.spec';
import { DecodedSigningPayload } from './decodeSigningPayload';
import { decodeBaseTxInfo as decodeSigningBase } from './decodeSigningPayload.spec';
import { decodeBaseTxInfo as decodeUnsignedBase } from './decodeUnsignedTx.spec';

describe('decode', () => {
  it('should decode signedTx', async done => {
    const unsigned = balances.transfer(
      TEST_METHOD_ARGS.balances.transfer,
      TEST_BASE_TX_INFO
    );
    const signingPayload = createSigningPayload(unsigned);
    const signature = await signWithAlice(signingPayload);

    const signedTx = createSignedTx(unsigned, signature);

    const txInfo = decode(signedTx, metadataRpc);

    decodeSignedBase(txInfo);
    expect(txInfo.method.pallet).toBe('balances');
    expect(txInfo.method.name).toBe('transfer');
    expect(txInfo.method.args).toEqual(TEST_METHOD_ARGS.balances.transfer);

    done();
  });

  it('decode unsigned tx', () => {
    const unsigned = balances.transfer(
      TEST_METHOD_ARGS.balances.transfer,
      TEST_BASE_TX_INFO
    );
    const txInfo = decode(unsigned, metadataRpc);

    decodeUnsignedBase(txInfo);
    expect(txInfo.method.pallet).toBe('balances');
    expect(txInfo.method.name).toBe('transfer');
    expect(txInfo.method.args).toEqual(TEST_METHOD_ARGS.balances.transfer);
  });

  it('should decode signing payload', done => {
    const unsigned = balances.transfer(
      TEST_METHOD_ARGS.balances.transfer,
      TEST_BASE_TX_INFO
    );
    const signingPayload = createSigningPayload(unsigned);

    const txInfo = decode(signingPayload, metadataRpc) as DecodedSigningPayload;

    decodeSigningBase(txInfo);
    expect(txInfo.method.pallet).toBe('balances');
    expect(txInfo.method.name).toBe('transfer');
    expect(txInfo.method.args).toEqual(TEST_METHOD_ARGS.balances.transfer);

    done();
  });
});

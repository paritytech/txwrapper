import { Compact, createType, Metadata, TypeRegistry } from '@polkadot/types';
import { Balance } from '@polkadot/types/interfaces';
import { hexToU8a } from '@polkadot/util';
import { setSS58Format } from '@polkadot/util-crypto';

import { TxInfo } from '../balanceTransfer';
import { KUSAMA_SS58_FORMAT } from '../util/constants';

/**
 * Parse the transaction information from a signed transaction offline
 *
 * @param unsigned - The JSON representing the unsigned transaction
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`
 */
export function decodeSignedTx(
  signedTx: string,
  metadataRpc: string
): Partial<TxInfo> {
  const registry = new TypeRegistry();
  registry.setMetadata(new Metadata(registry, metadataRpc));

  const tx = createType(registry, 'Extrinsic', hexToU8a(signedTx), {
    isSigned: true
  });

  setSS58Format(KUSAMA_SS58_FORMAT);

  return {
    address: tx.signer.toString(),
    amount: (tx.method.args[1] as Compact<Balance>).toNumber(),
    keepAlive: tx.method.methodName === 'transferKeepAlive',
    metadataRpc,
    nonce: tx.nonce.toNumber(),
    tip: tx.tip.toNumber(),
    to: tx.method.args[0].toString()
  };
}

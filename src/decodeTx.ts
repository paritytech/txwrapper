import { createType, TypeRegistry } from '@polkadot/types';
import { hexToU8a } from '@polkadot/util';

import {  TxInfo } from './balanceTransfer';

/**
 * Parse a signed transaction, and extract information about the transaction
 *
 * @param unsigned - The JSON representing the unsigned transaction
 */
export function decodeTx(signedTx: string): TxInfo {
  const registry = new TypeRegistry();

  const tx = createType(registry, 'Extrinsic', hexToU8a(signedTx), {
    isSigned: true
  });

  console.log('AAA', tx.method.argsDef);

  return {
    address: tx.nonce.
  };
}

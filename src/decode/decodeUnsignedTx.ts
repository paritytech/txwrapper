/**
 * @ignore
 */

/**
 * Blank comment to make typedoc work
 */

import { Compact, createType, Metadata, TypeRegistry } from '@polkadot/types';
import { Balance } from '@polkadot/types/interfaces';
import { setSS58Format } from '@polkadot/util-crypto';

import { TxInfo } from '../balanceTransfer';
import { BLOCKTIME, KUSAMA_SS58_FORMAT } from '../util/constants';
import { UnsignedTransaction } from '../util/interfaces';

/**
 * Parse the transaction information from an unigned transaction offline
 *
 * @param unsigned - The JSON representing the unsigned transaction
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`
 */
export function decodeUnsignedTx(
  unsigned: UnsignedTransaction,
  metadataRpc: string
): TxInfo {
  const registry = new TypeRegistry();
  registry.setMetadata(new Metadata(registry, metadataRpc));

  const method = createType(registry, 'Call', unsigned.method);

  setSS58Format(KUSAMA_SS58_FORMAT);

  return {
    address: unsigned.address,
    amount: (method.args[1] as Compact<Balance>).toNumber(),
    blockHash: unsigned.blockHash,
    blockNumber: createType(
      registry,
      'BlockNumber',
      unsigned.blockNumber
    ).toNumber(),
    genesisHash: unsigned.genesisHash,
    keepAlive: method.methodName === 'transferKeepAlive',
    metadataRpc,
    nonce: createType(registry, 'Compact<Index>', unsigned.nonce).toNumber(),
    specVersion: createType(registry, 'u32', unsigned.specVersion).toNumber(),
    tip: createType(registry, 'Compact<Balance>', unsigned.tip).toNumber(),
    to: method.args[0].toString(),
    validityPeriod:
      createType(registry, 'MortalEra', unsigned.era).period.toNumber() *
      BLOCKTIME
  };
}

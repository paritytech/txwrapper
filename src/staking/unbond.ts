import Metadata from '@polkadot/metadata';
import { createType, TypeRegistry } from '@polkadot/types';

import { EXTRINSIC_VERSION, ONE_SECOND } from '../util/constants';
import { UnsignedTransaction } from '../util/types';
import { TxInfoUnbond } from './stakingTxTypeUtils';

/**
 * Construct a transaction to unbond funds from a Stash account. This must be called
 * by the _Controller_ account.
 *
 * @param info - Information required to construct the transaction.
 */
export function unbond(info: TxInfoUnbond): UnsignedTransaction {
  const registry = new TypeRegistry();
  const metadata = new Metadata(registry, info.metadataRpc);

  const unbond = metadata.tx.staking.unbond;
  const method = unbond(info.value).toHex();

  return {
    address: info.address,
    blockHash: info.blockHash,
    blockNumber: createType(registry, 'BlockNumber', info.blockNumber).toHex(),
    era: createType(registry, 'ExtrinsicEra', {
      current: info.blockNumber,
      period: ONE_SECOND * info.validityPeriod
    }).toHex(),
    genesisHash: info.genesisHash,
    metadataRpc: info.metadataRpc,
    method,
    nonce: createType(registry, 'Compact<Index>', info.nonce).toHex(),
    specVersion: createType(registry, 'u32', info.specVersion).toHex(),
    tip: createType(registry, 'Compact<Balance>', info.tip).toHex(),
    version: EXTRINSIC_VERSION
  };
}

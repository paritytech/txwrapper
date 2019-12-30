import Metadata from '@polkadot/metadata';
import { createType, TypeRegistry } from '@polkadot/types';

import { EXTRINSIC_VERSION, ONE_SECOND } from '../../util/constants';
import { BaseTxInfo, UnsignedTransaction } from '../../util/types';

export interface TxInfoNominate extends BaseTxInfo {
  /**
   * The SS-58 encoded addresses of the targets you wish to nominate. A maximum of 16
   * nominations are allowed.
   *
   * Warning: This provides no checks as to whether these targets are actual validators.
   */
  targets: Array<string>;
}

/**
 * Construct a transaction to nominate. This must be called by the _Controller_ account.
 *
 * @param info - Information required to construct the transaction.
 */
export function nominate(info: TxInfoNominate): UnsignedTransaction {
  const registry = new TypeRegistry();
  const metadata = new Metadata(registry, info.metadataRpc);

  const nominate = metadata.tx.staking.nominate;
  const method = nominate(info.targets).toHex();

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

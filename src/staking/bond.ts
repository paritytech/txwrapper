import Metadata from '@polkadot/metadata';
import { createType, TypeRegistry } from '@polkadot/types';
import { SignerPayloadJSON } from '@polkadot/types/types';

import { EXTRINSIC_VERSION, ONE_SECOND } from '../util/constants';
import { TxInfoBond } from './stakingTxTypeUtils';

/**
 * JSON format for an unsigned transaction.
 */
export interface UnsignedBondTransaction extends SignerPayloadJSON {
  /**
   * The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
   * call `state_getMetadata`.
   */
  metadataRpc: string;
}

/**
 * Construct a transaction to bond funds and create a Stash account.
 *
 * @param info - Information required to construct the transaction.
 */
export function bond(info: TxInfoBond): UnsignedBondTransaction {
  const registry = new TypeRegistry();
  const metadata = new Metadata(registry, info.metadataRpc);

  const bond = metadata.tx.staking.bond;
  const method = bond(info.controller, info.value, info.payee).toHex();

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

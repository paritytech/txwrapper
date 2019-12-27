/**
 * @ignore
 */

/**
 * Blank comment to make typedoc work
 */

import { Keyring } from '@polkadot/api';
import metadataRpc from '@polkadot/metadata/Metadata/v9/static';
import { createType, TypeRegistry } from '@polkadot/types';
import { TRANSACTION_VERSION } from '@polkadot/types/primitive/Extrinsic/v4/Extrinsic';
import { cryptoWaitReady } from '@polkadot/util-crypto';

import { TxInfoTransfer } from '../balanceTransfer';
import {
  TxInfoBond,
  TxInfoNominate,
  TxInfoUnbond
} from '../staking/stakingTxTypeUtils';

export { metadataRpc };

/**
 * @ignore
 */
export const TEST_TRANSFER_TX_INFO: TxInfoTransfer = {
  address: 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F', // seed "//Alice"
  amount: 12,
  blockHash:
    '0x1fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582',
  blockNumber: 4302222,
  genesisHash:
    '0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636',
  metadataRpc,
  keepAlive: true,
  nonce: 2,
  specVersion: 1019,
  tip: 0,
  to: 'Fy2rsYCoowQBtuFXqLE65ehAY9T6KWcGiNCQAyPDCkfpm4s',
  validityPeriod: 240 * 60
};

/**
 * @ignore
 */
export async function signWithAlice(signingPayload: string): Promise<string> {
  // We're creating an Alice account that will sign the payload
  // Wait for the promise to resolve async WASM
  await cryptoWaitReady();

  const registry = new TypeRegistry();
  // Use ed25519 because it has deterministic signatures
  const keyring = new Keyring({ type: 'ed25519' });
  const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });

  const { signature } = createType(
    registry,
    'ExtrinsicPayload',
    signingPayload,
    {
      version: TRANSACTION_VERSION
    }
  ).sign(alice);

  return signature;
}

/**
 * @ignore
 */
export const TEST_BOND_TX_INFO: TxInfoBond = {
  address: 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F', // seed "//Alice"
  controller: 'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP', // seed "//Bob"
  value: 100,
  payee: 'Staked',
  blockHash:
    '0x1fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582',
  blockNumber: 4302222,
  genesisHash:
    '0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636',
  metadataRpc,
  nonce: 2,
  specVersion: 1019,
  tip: 0,
  validityPeriod: 240 * 60
};

/**
 * @ignore
 */
export const TEST_NOMINATE_TX_INFO: TxInfoNominate = {
  address: 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F', // seed "//Alice"
  targets: [
    'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP', // seed "//Bob"
    'Fr4NzY1udSFFLzb2R3qxVQkwz9cZraWkyfH4h3mVVk7BK7P' // seed "//Charlie"
  ],
  blockHash:
    '0x1fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582',
  blockNumber: 4302222,
  genesisHash:
    '0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636',
  metadataRpc,
  nonce: 2,
  specVersion: 1019,
  tip: 0,
  validityPeriod: 240 * 60
};

/**
 * @ignore
 */
export const TEST_UNBOND_TX_INFO: TxInfoUnbond = {
  address: 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F', // seed "//Alice"
  value: 100,
  blockHash:
    '0x1fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582',
  blockNumber: 4302222,
  genesisHash:
    '0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636',
  metadataRpc,
  nonce: 2,
  specVersion: 1019,
  tip: 0,
  validityPeriod: 240 * 60
};

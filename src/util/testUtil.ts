/**
 * @ignore
 */ /** */

import { Keyring } from '@polkadot/api';
import metadataRpc from '@polkadot/metadata/Metadata/v9/static';
import { createType, TypeRegistry } from '@polkadot/types';
import { TRANSACTION_VERSION } from '@polkadot/types/primitive/Extrinsic/v4/Extrinsic';
import { cryptoWaitReady } from '@polkadot/util-crypto';

import {
  BalancesTransferArgs,
  StakingBondArgs,
  StakingNominateArgs,
  StakingUnbondArgs
} from '../methods';
import { BaseTxInfo, UnsignedTransaction } from './types';

export { metadataRpc };

export const TEST_BASE_TX_INFO: BaseTxInfo = {
  address: 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F', // seed "//Alice"
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
 * Test helper to test that all base tx information al correctly populated
 *
 * @param unsigned - Unsigned transaction to test
 */
export function testBaseTxInfo(unsigned: UnsignedTransaction): void {
  (['address', 'blockHash', 'genesisHash'] as const).forEach(key =>
    expect(unsigned[key]).toBe(TEST_BASE_TX_INFO[key])
  );
  expect(unsigned.blockNumber).toBe('0x0041a58e');
  expect(unsigned.era).toBe('0xeb58');
  expect(unsigned.nonce).toBe('0x00000002');
  expect(unsigned.specVersion).toBe('0x000003fb');
  expect(unsigned.tip).toBe('0x00000000000000000000000000000000');
  expect(unsigned.version).toBe(4);
}

export const TEST_BALANCES_TRANSFER_ARGS: BalancesTransferArgs = {
  dest: 'Fy2rsYCoowQBtuFXqLE65ehAY9T6KWcGiNCQAyPDCkfpm4s',
  value: 12
};

export const TEST_STAKING_BOND_ARGS: StakingBondArgs = {
  controller: 'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP', // seed "//Bob"
  value: 100,
  payee: 'Staked'
};

export const TEST_STAKING_NOMINATE_ARGS: StakingNominateArgs = {
  targets: [
    'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP', // seed "//Bob"
    'Fr4NzY1udSFFLzb2R3qxVQkwz9cZraWkyfH4h3mVVk7BK7P' // seed "//Charlie"
  ]
};

export const TEST_STAKING_UNBOND_ARGS: StakingUnbondArgs = { value: 100 };

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

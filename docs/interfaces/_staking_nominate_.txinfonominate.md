[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["staking/nominate"](../modules/_staking_nominate_.md) › [TxInfoNominate](_staking_nominate_.txinfonominate.md)

# Interface: TxInfoNominate

## Hierarchy

* **TxInfoNominate**

## Index

### Properties

* [address](_staking_nominate_.txinfonominate.md#address)
* [targets](_staking_nominate_.txinfonominate.md#targets)
* [blockHash](_staking_nominate_.txinfonominate.md#blockhash)
* [blockNumber](_staking_nominate_.txinfonominate.md#blocknumber)
* [genesisHash](_staking_nominate_.txinfonominate.md#genesishash)
* [metadataRpc](_staking_nominate_.txinfonominate.md#metadatarpc)
* [nonce](_staking_nominate_.txinfonominate.md#nonce)
* [specVersion](_staking_nominate_.txinfonominate.md#specversion)
* [tip](_staking_nominate_.txinfonominate.md#tip)
* [validityPeriod](_staking_nominate_.txinfonominate.md#validityperiod)

## Properties

<!-- TODO: Update commit hashes once commit is made. -->
<!-- TODO: Update line numbers. -->

###  address

• **address**: *string*

*Defined in [src/staking/stakingTxTypeUtils:22](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/91a53f7/src/staking/stakingTxTypeUtils#L22)*

The ss-58 encoded address

___

###  targets

• **targets**: *string*

*Defined in [src/staking/stakingTxTypeUtils:26](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/91a53f7/src/staking/stakingTxTypeUtils#L26)*

The SS-58 encoded addresses of the targets you wish to nominate. A maximum of 16
nominations are allowed.

___

###  blockHash

• **blockHash**: *string*

*Defined in [src/staking/stakingTxTypeUtils:30](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/91a53f7/src/staking/stakingTxTypeUtils#L30)*

The checkpoint hash of the block, in hex.

___

###  blockNumber

• **blockNumber**: *number*

*Defined in [src/staking/stakingTxTypeUtils:34](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/91a53f7/src/staking/stakingTxTypeUtils#L34)*

The checkpoint block number (u32), in hex.

___

###  genesisHash

• **genesisHash**: *string*

*Defined in [src/staking/stakingTxTypeUtils:38](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/91a53f7/src/staking/stakingTxTypeUtils#L38)*

The genesis hash of the chain, in hex.
___

###  metadataRpc

• **metadataRpc**: *string*

*Defined in [src/staking/stakingTxTypeUtils:47](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/91a53f7/src/staking/stakingTxTypeUtils#L47)*

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`.

___

###  nonce

• **nonce**: *number*

*Defined in [src/staking/stakingTxTypeUtils:51](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/91a53f7/src/staking/stakingTxTypeUtils#L51)*

The nonce for this transaction.

___

###  specVersion

• **specVersion**: *number*

*Defined in [src/staking/stakingTxTypeUtils:55](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/91a53f7/src/staking/stakingTxTypeUtils#L55)*

The current spec version for the runtime.

___

###  tip

• **tip**: *number*

*Defined in [src/staking/stakingTxTypeUtils:59](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/91a53f7/src/staking/stakingTxTypeUtils#L59)*

The tip for this transaction, in hex.

___

###  validityPeriod

• **validityPeriod**: *number*

*Defined in [src/staking/stakingTxTypeUtils:68](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/91a53f7/src/staking/stakingTxTypeUtils#L68)*

The amount of time (in second) the transaction is valid for. Will be
translated into a mortal era.

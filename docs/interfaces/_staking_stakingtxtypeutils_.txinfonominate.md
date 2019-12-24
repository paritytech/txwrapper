[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["staking/stakingTxTypeUtils"](../modules/_staking_stakingtxtypeutils_.md) › [TxInfoNominate](_staking_stakingtxtypeutils_.txinfonominate.md)

# Interface: TxInfoNominate

## Hierarchy

* **TxInfoNominate**

## Index

### Properties

* [address](_staking_stakingtxtypeutils_.txinfonominate.md#address)
* [blockHash](_staking_stakingtxtypeutils_.txinfonominate.md#blockhash)
* [blockNumber](_staking_stakingtxtypeutils_.txinfonominate.md#blocknumber)
* [genesisHash](_staking_stakingtxtypeutils_.txinfonominate.md#genesishash)
* [metadataRpc](_staking_stakingtxtypeutils_.txinfonominate.md#metadatarpc)
* [nonce](_staking_stakingtxtypeutils_.txinfonominate.md#nonce)
* [specVersion](_staking_stakingtxtypeutils_.txinfonominate.md#specversion)
* [targets](_staking_stakingtxtypeutils_.txinfonominate.md#targets)
* [tip](_staking_stakingtxtypeutils_.txinfonominate.md#tip)
* [validityPeriod](_staking_stakingtxtypeutils_.txinfonominate.md#validityperiod)

## Properties

###  address

• **address**: *string*

*Defined in [src/staking/stakingTxTypeUtils.ts:58](https://github.com/paritytech/txwrapper/blob/29e727e/src/staking/stakingTxTypeUtils.ts#L58)*

The ss-58 encoded address of the sending account.

___

###  blockHash

• **blockHash**: *string*

*Defined in [src/staking/stakingTxTypeUtils.ts:73](https://github.com/paritytech/txwrapper/blob/29e727e/src/staking/stakingTxTypeUtils.ts#L73)*

The checkpoint hash of the block, in hex.

___

###  blockNumber

• **blockNumber**: *number*

*Defined in [src/staking/stakingTxTypeUtils.ts:77](https://github.com/paritytech/txwrapper/blob/29e727e/src/staking/stakingTxTypeUtils.ts#L77)*

The checkpoint block number (u32), in hex.

___

###  genesisHash

• **genesisHash**: *string*

*Defined in [src/staking/stakingTxTypeUtils.ts:81](https://github.com/paritytech/txwrapper/blob/29e727e/src/staking/stakingTxTypeUtils.ts#L81)*

The genesis hash of the chain, in hex.

___

###  metadataRpc

• **metadataRpc**: *string*

*Defined in [src/staking/stakingTxTypeUtils.ts:86](https://github.com/paritytech/txwrapper/blob/29e727e/src/staking/stakingTxTypeUtils.ts#L86)*

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`.

___

###  nonce

• **nonce**: *number*

*Defined in [src/staking/stakingTxTypeUtils.ts:90](https://github.com/paritytech/txwrapper/blob/29e727e/src/staking/stakingTxTypeUtils.ts#L90)*

The nonce for this transaction.

___

###  specVersion

• **specVersion**: *number*

*Defined in [src/staking/stakingTxTypeUtils.ts:94](https://github.com/paritytech/txwrapper/blob/29e727e/src/staking/stakingTxTypeUtils.ts#L94)*

The current spec version for the runtime.

___

###  targets

• **targets**: *Array‹string›*

*Defined in [src/staking/stakingTxTypeUtils.ts:69](https://github.com/paritytech/txwrapper/blob/29e727e/src/staking/stakingTxTypeUtils.ts#L69)*

The SS-58 encoded addresses of the targets you wish to nominate. A maximum of 16
nominations are allowed.

Format: "ADDR1,ADDR2,ADDR3,..."
TODO: Check if this format will submit properly.
Rust code: targets: Vec<<T::Lookup as StaticLookup>::Source>

Warning: This provides no checks as to whether these targets are actual validators.

___

###  tip

• **tip**: *number*

*Defined in [src/staking/stakingTxTypeUtils.ts:98](https://github.com/paritytech/txwrapper/blob/29e727e/src/staking/stakingTxTypeUtils.ts#L98)*

The tip for this transaction, in hex.

___

###  validityPeriod

• **validityPeriod**: *number*

*Defined in [src/staking/stakingTxTypeUtils.ts:103](https://github.com/paritytech/txwrapper/blob/29e727e/src/staking/stakingTxTypeUtils.ts#L103)*

The amount of time (in second) the transaction is valid for. Will be
translated into a mortal era.

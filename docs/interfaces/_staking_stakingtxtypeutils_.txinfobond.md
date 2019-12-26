[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["staking/stakingTxTypeUtils"](../modules/_staking_stakingtxtypeutils_.md) › [TxInfoBond](_staking_stakingtxtypeutils_.txinfobond.md)

# Interface: TxInfoBond

## Hierarchy

* **TxInfoBond**

## Index

### Properties

* [address](_staking_stakingtxtypeutils_.txinfobond.md#address)
* [blockHash](_staking_stakingtxtypeutils_.txinfobond.md#blockhash)
* [blockNumber](_staking_stakingtxtypeutils_.txinfobond.md#blocknumber)
* [controller](_staking_stakingtxtypeutils_.txinfobond.md#controller)
* [genesisHash](_staking_stakingtxtypeutils_.txinfobond.md#genesishash)
* [metadataRpc](_staking_stakingtxtypeutils_.txinfobond.md#metadatarpc)
* [nonce](_staking_stakingtxtypeutils_.txinfobond.md#nonce)
* [payee](_staking_stakingtxtypeutils_.txinfobond.md#payee)
* [specVersion](_staking_stakingtxtypeutils_.txinfobond.md#specversion)
* [tip](_staking_stakingtxtypeutils_.txinfobond.md#tip)
* [validityPeriod](_staking_stakingtxtypeutils_.txinfobond.md#validityperiod)
* [value](_staking_stakingtxtypeutils_.txinfobond.md#value)

## Properties

###  address

• **address**: *string*

*Defined in [src/staking/stakingTxTypeUtils.ts:5](https://github.com/paritytech/txwrapper/blob/ef34f88/src/staking/stakingTxTypeUtils.ts#L5)*

The ss-58 encoded address of the sending account.

___

###  blockHash

• **blockHash**: *string*

*Defined in [src/staking/stakingTxTypeUtils.ts:21](https://github.com/paritytech/txwrapper/blob/ef34f88/src/staking/stakingTxTypeUtils.ts#L21)*

The checkpoint hash of the block, in hex.

___

###  blockNumber

• **blockNumber**: *number*

*Defined in [src/staking/stakingTxTypeUtils.ts:25](https://github.com/paritytech/txwrapper/blob/ef34f88/src/staking/stakingTxTypeUtils.ts#L25)*

The checkpoint block number (u32), in hex.

___

###  controller

• **controller**: *string*

*Defined in [src/staking/stakingTxTypeUtils.ts:9](https://github.com/paritytech/txwrapper/blob/ef34f88/src/staking/stakingTxTypeUtils.ts#L9)*

The SS-58 encoded address of the Controller account.

___

###  genesisHash

• **genesisHash**: *string*

*Defined in [src/staking/stakingTxTypeUtils.ts:29](https://github.com/paritytech/txwrapper/blob/ef34f88/src/staking/stakingTxTypeUtils.ts#L29)*

The genesis hash of the chain, in hex.

___

###  metadataRpc

• **metadataRpc**: *string*

*Defined in [src/staking/stakingTxTypeUtils.ts:34](https://github.com/paritytech/txwrapper/blob/ef34f88/src/staking/stakingTxTypeUtils.ts#L34)*

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`.

___

###  nonce

• **nonce**: *number*

*Defined in [src/staking/stakingTxTypeUtils.ts:38](https://github.com/paritytech/txwrapper/blob/ef34f88/src/staking/stakingTxTypeUtils.ts#L38)*

The nonce for this transaction.

___

###  payee

• **payee**: *string*

*Defined in [src/staking/stakingTxTypeUtils.ts:17](https://github.com/paritytech/txwrapper/blob/ef34f88/src/staking/stakingTxTypeUtils.ts#L17)*

The rewards destination. Can be "Stash", "Staked", or "Controller".

___

###  specVersion

• **specVersion**: *number*

*Defined in [src/staking/stakingTxTypeUtils.ts:42](https://github.com/paritytech/txwrapper/blob/ef34f88/src/staking/stakingTxTypeUtils.ts#L42)*

The current spec version for the runtime.

___

###  tip

• **tip**: *number*

*Defined in [src/staking/stakingTxTypeUtils.ts:46](https://github.com/paritytech/txwrapper/blob/ef34f88/src/staking/stakingTxTypeUtils.ts#L46)*

The tip for this transaction, in hex.

___

###  validityPeriod

• **validityPeriod**: *number*

*Defined in [src/staking/stakingTxTypeUtils.ts:51](https://github.com/paritytech/txwrapper/blob/ef34f88/src/staking/stakingTxTypeUtils.ts#L51)*

The amount of time (in second) the transaction is valid for. Will be
translated into a mortal era.

___

###  value

• **value**: *number*

*Defined in [src/staking/stakingTxTypeUtils.ts:13](https://github.com/paritytech/txwrapper/blob/ef34f88/src/staking/stakingTxTypeUtils.ts#L13)*

The number of tokens to bond.

[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["staking/stakingTxTypeUtils"](../modules/_staking_stakingtxtypeutils_.md) › [TxInfoUnbond](_staking_stakingtxtypeutils_.txinfounbond.md)

# Interface: TxInfoUnbond

## Hierarchy

* **TxInfoUnbond**

## Index

### Properties

* [address](_staking_stakingtxtypeutils_.txinfounbond.md#address)
* [blockHash](_staking_stakingtxtypeutils_.txinfounbond.md#blockhash)
* [blockNumber](_staking_stakingtxtypeutils_.txinfounbond.md#blocknumber)
* [genesisHash](_staking_stakingtxtypeutils_.txinfounbond.md#genesishash)
* [metadataRpc](_staking_stakingtxtypeutils_.txinfounbond.md#metadatarpc)
* [nonce](_staking_stakingtxtypeutils_.txinfounbond.md#nonce)
* [specVersion](_staking_stakingtxtypeutils_.txinfounbond.md#specversion)
* [tip](_staking_stakingtxtypeutils_.txinfounbond.md#tip)
* [validityPeriod](_staking_stakingtxtypeutils_.txinfounbond.md#validityperiod)
* [value](_staking_stakingtxtypeutils_.txinfounbond.md#value)

## Properties

###  address

• **address**: *string*

*Defined in [src/staking/stakingTxTypeUtils.ts:110](https://github.com/paritytech/txwrapper/blob/29e727e/src/staking/stakingTxTypeUtils.ts#L110)*

The ss-58 encoded address of the sending account.

___

###  blockHash

• **blockHash**: *string*

*Defined in [src/staking/stakingTxTypeUtils.ts:118](https://github.com/paritytech/txwrapper/blob/29e727e/src/staking/stakingTxTypeUtils.ts#L118)*

The checkpoint hash of the block, in hex.

___

###  blockNumber

• **blockNumber**: *number*

*Defined in [src/staking/stakingTxTypeUtils.ts:122](https://github.com/paritytech/txwrapper/blob/29e727e/src/staking/stakingTxTypeUtils.ts#L122)*

The checkpoint block number (u32), in hex.

___

###  genesisHash

• **genesisHash**: *string*

*Defined in [src/staking/stakingTxTypeUtils.ts:126](https://github.com/paritytech/txwrapper/blob/29e727e/src/staking/stakingTxTypeUtils.ts#L126)*

The genesis hash of the chain, in hex.

___

###  metadataRpc

• **metadataRpc**: *string*

*Defined in [src/staking/stakingTxTypeUtils.ts:131](https://github.com/paritytech/txwrapper/blob/29e727e/src/staking/stakingTxTypeUtils.ts#L131)*

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`.

___

###  nonce

• **nonce**: *number*

*Defined in [src/staking/stakingTxTypeUtils.ts:135](https://github.com/paritytech/txwrapper/blob/29e727e/src/staking/stakingTxTypeUtils.ts#L135)*

The nonce for this transaction.

___

###  specVersion

• **specVersion**: *number*

*Defined in [src/staking/stakingTxTypeUtils.ts:139](https://github.com/paritytech/txwrapper/blob/29e727e/src/staking/stakingTxTypeUtils.ts#L139)*

The current spec version for the runtime.

___

###  tip

• **tip**: *number*

*Defined in [src/staking/stakingTxTypeUtils.ts:143](https://github.com/paritytech/txwrapper/blob/29e727e/src/staking/stakingTxTypeUtils.ts#L143)*

The tip for this transaction, in hex.

___

###  validityPeriod

• **validityPeriod**: *number*

*Defined in [src/staking/stakingTxTypeUtils.ts:148](https://github.com/paritytech/txwrapper/blob/29e727e/src/staking/stakingTxTypeUtils.ts#L148)*

The amount of time (in second) the transaction is valid for. Will be
translated into a mortal era.

___

###  value

• **value**: *number*

*Defined in [src/staking/stakingTxTypeUtils.ts:114](https://github.com/paritytech/txwrapper/blob/29e727e/src/staking/stakingTxTypeUtils.ts#L114)*

The number of tokens to unbond.

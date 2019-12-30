[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["staking/stakingTxTypeUtils"](../modules/_staking_stakingtxtypeutils_.md) › [TxInfoNominate](_staking_stakingtxtypeutils_.txinfonominate.md)

# Interface: TxInfoNominate

## Hierarchy

* [BaseTxInfo](_util_types_.basetxinfo.md)

  ↳ **TxInfoNominate**

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

*Inherited from [BaseTxInfo](_util_types_.basetxinfo.md).[address](_util_types_.basetxinfo.md#address)*

*Defined in [src/util/types.ts:21](https://github.com/paritytech/txwrapper/blob/74e5037/src/util/types.ts#L21)*

The ss-58 encoded address of the sending account.

___

###  blockHash

• **blockHash**: *string*

*Inherited from [BaseTxInfo](_util_types_.basetxinfo.md).[blockHash](_util_types_.basetxinfo.md#blockhash)*

*Defined in [src/util/types.ts:25](https://github.com/paritytech/txwrapper/blob/74e5037/src/util/types.ts#L25)*

The checkpoint hash of the block, in hex.

___

###  blockNumber

• **blockNumber**: *number*

*Inherited from [BaseTxInfo](_util_types_.basetxinfo.md).[blockNumber](_util_types_.basetxinfo.md#blocknumber)*

*Defined in [src/util/types.ts:29](https://github.com/paritytech/txwrapper/blob/74e5037/src/util/types.ts#L29)*

The checkpoint block number (u32), in hex.

___

###  genesisHash

• **genesisHash**: *string*

*Inherited from [BaseTxInfo](_util_types_.basetxinfo.md).[genesisHash](_util_types_.basetxinfo.md#genesishash)*

*Defined in [src/util/types.ts:33](https://github.com/paritytech/txwrapper/blob/74e5037/src/util/types.ts#L33)*

The genesis hash of the chain, in hex.

___

###  metadataRpc

• **metadataRpc**: *string*

*Inherited from [BaseTxInfo](_util_types_.basetxinfo.md).[metadataRpc](_util_types_.basetxinfo.md#metadatarpc)*

*Defined in [src/util/types.ts:38](https://github.com/paritytech/txwrapper/blob/74e5037/src/util/types.ts#L38)*

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`.

___

###  nonce

• **nonce**: *number*

*Inherited from [BaseTxInfo](_util_types_.basetxinfo.md).[nonce](_util_types_.basetxinfo.md#nonce)*

*Defined in [src/util/types.ts:42](https://github.com/paritytech/txwrapper/blob/74e5037/src/util/types.ts#L42)*

The nonce for this transaction.

___

###  specVersion

• **specVersion**: *number*

*Inherited from [BaseTxInfo](_util_types_.basetxinfo.md).[specVersion](_util_types_.basetxinfo.md#specversion)*

*Defined in [src/util/types.ts:46](https://github.com/paritytech/txwrapper/blob/74e5037/src/util/types.ts#L46)*

The current spec version for the runtime.

___

###  targets

• **targets**: *Array‹string›*

*Defined in [src/staking/stakingTxTypeUtils.ts:25](https://github.com/paritytech/txwrapper/blob/74e5037/src/staking/stakingTxTypeUtils.ts#L25)*

The SS-58 encoded addresses of the targets you wish to nominate. A maximum of 16
nominations are allowed.

Warning: This provides no checks as to whether these targets are actual validators.

___

###  tip

• **tip**: *number*

*Inherited from [BaseTxInfo](_util_types_.basetxinfo.md).[tip](_util_types_.basetxinfo.md#tip)*

*Defined in [src/util/types.ts:50](https://github.com/paritytech/txwrapper/blob/74e5037/src/util/types.ts#L50)*

The tip for this transaction, in hex.

___

###  validityPeriod

• **validityPeriod**: *number*

*Inherited from [BaseTxInfo](_util_types_.basetxinfo.md).[validityPeriod](_util_types_.basetxinfo.md#validityperiod)*

*Defined in [src/util/types.ts:55](https://github.com/paritytech/txwrapper/blob/74e5037/src/util/types.ts#L55)*

The amount of time (in second) the transaction is valid for. Will be
translated into a mortal era.

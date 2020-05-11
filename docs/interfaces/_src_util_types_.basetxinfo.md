[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/util/types"](../modules/_src_util_types_.md) › [BaseTxInfo](_src_util_types_.basetxinfo.md)

# Interface: BaseTxInfo

JSON format for information that is common to all transactions.

## Hierarchy

* **BaseTxInfo**

## Index

### Properties

* [address](_src_util_types_.basetxinfo.md#address)
* [blockHash](_src_util_types_.basetxinfo.md#blockhash)
* [blockNumber](_src_util_types_.basetxinfo.md#blocknumber)
* [eraPeriod](_src_util_types_.basetxinfo.md#optional-eraperiod)
* [genesisHash](_src_util_types_.basetxinfo.md#genesishash)
* [metadataRpc](_src_util_types_.basetxinfo.md#metadatarpc)
* [nonce](_src_util_types_.basetxinfo.md#nonce)
* [specVersion](_src_util_types_.basetxinfo.md#specversion)
* [tip](_src_util_types_.basetxinfo.md#optional-tip)
* [validityPeriod](_src_util_types_.basetxinfo.md#optional-validityperiod)

## Properties

###  address

• **address**: *string*

*Defined in [src/util/types.ts:21](https://github.com/paritytech/txwrapper/blob/9698841/src/util/types.ts#L21)*

The ss-58 encoded address of the sending account.

___

###  blockHash

• **blockHash**: *string*

*Defined in [src/util/types.ts:25](https://github.com/paritytech/txwrapper/blob/9698841/src/util/types.ts#L25)*

The checkpoint hash of the block, in hex.

___

###  blockNumber

• **blockNumber**: *number*

*Defined in [src/util/types.ts:29](https://github.com/paritytech/txwrapper/blob/9698841/src/util/types.ts#L29)*

The checkpoint block number (u32), in hex.

___

### `Optional` eraPeriod

• **eraPeriod**? : *undefined | number*

*Defined in [src/util/types.ts:36](https://github.com/paritytech/txwrapper/blob/9698841/src/util/types.ts#L36)*

Describe the longevity of a transaction. It represents the validity from
the `blockHash` field, in number of blocks. Defaults to 64 blocks.

**`default`** 64

___

###  genesisHash

• **genesisHash**: *string*

*Defined in [src/util/types.ts:40](https://github.com/paritytech/txwrapper/blob/9698841/src/util/types.ts#L40)*

The genesis hash of the chain, in hex.

___

###  metadataRpc

• **metadataRpc**: *string*

*Defined in [src/util/types.ts:45](https://github.com/paritytech/txwrapper/blob/9698841/src/util/types.ts#L45)*

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`.

___

###  nonce

• **nonce**: *number*

*Defined in [src/util/types.ts:49](https://github.com/paritytech/txwrapper/blob/9698841/src/util/types.ts#L49)*

The nonce for this transaction.

___

###  specVersion

• **specVersion**: *number*

*Defined in [src/util/types.ts:53](https://github.com/paritytech/txwrapper/blob/9698841/src/util/types.ts#L53)*

The current spec version for the runtime.

___

### `Optional` tip

• **tip**? : *undefined | number*

*Defined in [src/util/types.ts:59](https://github.com/paritytech/txwrapper/blob/9698841/src/util/types.ts#L59)*

The tip for this transaction, in hex.

**`default`** 0

___

### `Optional` validityPeriod

• **validityPeriod**? : *undefined | number*

*Defined in [src/util/types.ts:67](https://github.com/paritytech/txwrapper/blob/9698841/src/util/types.ts#L67)*

The amount of time (in second) the transaction is valid for. Will be
translated into a mortal era. Defaults to 5 minutes.

**`deprecated`** Please use `eraPeriod` instead.

**`default`** 300

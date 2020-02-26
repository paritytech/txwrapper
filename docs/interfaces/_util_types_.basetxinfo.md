[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["util/types"](../modules/_util_types_.md) › [BaseTxInfo](_util_types_.basetxinfo.md)

# Interface: BaseTxInfo

JSON format for information that is common to all transactions.

## Hierarchy

* **BaseTxInfo**

## Index

### Properties

* [address](_util_types_.basetxinfo.md#address)
* [blockHash](_util_types_.basetxinfo.md#blockhash)
* [blockNumber](_util_types_.basetxinfo.md#blocknumber)
* [genesisHash](_util_types_.basetxinfo.md#genesishash)
* [metadataRpc](_util_types_.basetxinfo.md#metadatarpc)
* [nonce](_util_types_.basetxinfo.md#nonce)
* [specVersion](_util_types_.basetxinfo.md#specversion)
* [tip](_util_types_.basetxinfo.md#optional-tip)
* [validityPeriod](_util_types_.basetxinfo.md#optional-validityperiod)

## Properties

###  address

• **address**: *string*

*Defined in [src/util/types.ts:21](https://github.com/paritytech/txwrapper/blob/230d329/src/util/types.ts#L21)*

The ss-58 encoded address of the sending account.

___

###  blockHash

• **blockHash**: *string*

*Defined in [src/util/types.ts:25](https://github.com/paritytech/txwrapper/blob/230d329/src/util/types.ts#L25)*

The checkpoint hash of the block, in hex.

___

###  blockNumber

• **blockNumber**: *number*

*Defined in [src/util/types.ts:29](https://github.com/paritytech/txwrapper/blob/230d329/src/util/types.ts#L29)*

The checkpoint block number (u32), in hex.

___

###  genesisHash

• **genesisHash**: *string*

*Defined in [src/util/types.ts:33](https://github.com/paritytech/txwrapper/blob/230d329/src/util/types.ts#L33)*

The genesis hash of the chain, in hex.

___

###  metadataRpc

• **metadataRpc**: *string*

*Defined in [src/util/types.ts:38](https://github.com/paritytech/txwrapper/blob/230d329/src/util/types.ts#L38)*

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`.

___

###  nonce

• **nonce**: *number*

*Defined in [src/util/types.ts:42](https://github.com/paritytech/txwrapper/blob/230d329/src/util/types.ts#L42)*

The nonce for this transaction.

___

###  specVersion

• **specVersion**: *number*

*Defined in [src/util/types.ts:46](https://github.com/paritytech/txwrapper/blob/230d329/src/util/types.ts#L46)*

The current spec version for the runtime.

___

### `Optional` tip

• **tip**? : *undefined | number*

*Defined in [src/util/types.ts:52](https://github.com/paritytech/txwrapper/blob/230d329/src/util/types.ts#L52)*

The tip for this transaction, in hex.

**`default`** 0

___

### `Optional` validityPeriod

• **validityPeriod**? : *undefined | number*

*Defined in [src/util/types.ts:59](https://github.com/paritytech/txwrapper/blob/230d329/src/util/types.ts#L59)*

The amount of time (in second) the transaction is valid for. Will be
translated into a mortal era. Defaults to 5 minutes.

**`default`** 300

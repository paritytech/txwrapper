[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["util/method"](../modules/_util_method_.md) › [TxInfo](_util_method_.txinfo.md)

# Interface: TxInfo

Complete information about a tx

## Hierarchy

* [BaseTxInfo](_util_types_.basetxinfo.md)

  ↳ **TxInfo**

## Index

### Properties

* [address](_util_method_.txinfo.md#address)
* [blockHash](_util_method_.txinfo.md#blockhash)
* [blockNumber](_util_method_.txinfo.md#blocknumber)
* [genesisHash](_util_method_.txinfo.md#genesishash)
* [metadataRpc](_util_method_.txinfo.md#metadatarpc)
* [method](_util_method_.txinfo.md#method)
* [nonce](_util_method_.txinfo.md#nonce)
* [specVersion](_util_method_.txinfo.md#specversion)
* [tip](_util_method_.txinfo.md#tip)
* [validityPeriod](_util_method_.txinfo.md#validityperiod)

## Properties

###  address

• **address**: *string*

*Inherited from [BaseTxInfo](_util_types_.basetxinfo.md).[address](_util_types_.basetxinfo.md#address)*

*Defined in [src/util/types.ts:21](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/8d67f3d/src/util/types.ts#L21)*

The ss-58 encoded address of the sending account.

___

###  blockHash

• **blockHash**: *string*

*Inherited from [BaseTxInfo](_util_types_.basetxinfo.md).[blockHash](_util_types_.basetxinfo.md#blockhash)*

*Defined in [src/util/types.ts:25](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/8d67f3d/src/util/types.ts#L25)*

The checkpoint hash of the block, in hex.

___

###  blockNumber

• **blockNumber**: *number*

*Inherited from [BaseTxInfo](_util_types_.basetxinfo.md).[blockNumber](_util_types_.basetxinfo.md#blocknumber)*

*Defined in [src/util/types.ts:29](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/8d67f3d/src/util/types.ts#L29)*

The checkpoint block number (u32), in hex.

___

###  genesisHash

• **genesisHash**: *string*

*Inherited from [BaseTxInfo](_util_types_.basetxinfo.md).[genesisHash](_util_types_.basetxinfo.md#genesishash)*

*Defined in [src/util/types.ts:33](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/8d67f3d/src/util/types.ts#L33)*

The genesis hash of the chain, in hex.

___

###  metadataRpc

• **metadataRpc**: *string*

*Inherited from [BaseTxInfo](_util_types_.basetxinfo.md).[metadataRpc](_util_types_.basetxinfo.md#metadatarpc)*

*Defined in [src/util/types.ts:38](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/8d67f3d/src/util/types.ts#L38)*

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`.

___

###  method

• **method**: *[Method](_util_method_.method.md)*

*Defined in [src/util/method.ts:21](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/8d67f3d/src/util/method.ts#L21)*

___

###  nonce

• **nonce**: *number*

*Inherited from [BaseTxInfo](_util_types_.basetxinfo.md).[nonce](_util_types_.basetxinfo.md#nonce)*

*Defined in [src/util/types.ts:42](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/8d67f3d/src/util/types.ts#L42)*

The nonce for this transaction.

___

###  specVersion

• **specVersion**: *number*

*Inherited from [BaseTxInfo](_util_types_.basetxinfo.md).[specVersion](_util_types_.basetxinfo.md#specversion)*

*Defined in [src/util/types.ts:46](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/8d67f3d/src/util/types.ts#L46)*

The current spec version for the runtime.

___

###  tip

• **tip**: *number*

*Inherited from [BaseTxInfo](_util_types_.basetxinfo.md).[tip](_util_types_.basetxinfo.md#tip)*

*Defined in [src/util/types.ts:50](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/8d67f3d/src/util/types.ts#L50)*

The tip for this transaction, in hex.

___

###  validityPeriod

• **validityPeriod**: *number*

*Inherited from [BaseTxInfo](_util_types_.basetxinfo.md).[validityPeriod](_util_types_.basetxinfo.md#validityperiod)*

*Defined in [src/util/types.ts:55](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/8d67f3d/src/util/types.ts#L55)*

The amount of time (in second) the transaction is valid for. Will be
translated into a mortal era.

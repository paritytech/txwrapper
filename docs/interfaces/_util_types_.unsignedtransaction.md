[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["util/types"](../modules/_util_types_.md) › [UnsignedTransaction](_util_types_.unsignedtransaction.md)

# Interface: UnsignedTransaction

JSON format for an unsigned transaction.

## Hierarchy

* SignerPayloadJSON

  ↳ **UnsignedTransaction**

## Index

### Properties

* [address](_util_types_.unsignedtransaction.md#address)
* [blockHash](_util_types_.unsignedtransaction.md#blockhash)
* [blockNumber](_util_types_.unsignedtransaction.md#blocknumber)
* [era](_util_types_.unsignedtransaction.md#era)
* [genesisHash](_util_types_.unsignedtransaction.md#genesishash)
* [metadataRpc](_util_types_.unsignedtransaction.md#metadatarpc)
* [method](_util_types_.unsignedtransaction.md#method)
* [nonce](_util_types_.unsignedtransaction.md#nonce)
* [specVersion](_util_types_.unsignedtransaction.md#specversion)
* [tip](_util_types_.unsignedtransaction.md#tip)
* [version](_util_types_.unsignedtransaction.md#version)

## Properties

###  address

• **address**: *string*

*Inherited from [UnsignedTransaction](_util_types_.unsignedtransaction.md).[address](_util_types_.unsignedtransaction.md#address)*

Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:99

**`description`** The ss-58 encoded address

___

###  blockHash

• **blockHash**: *string*

*Inherited from [UnsignedTransaction](_util_types_.unsignedtransaction.md).[blockHash](_util_types_.unsignedtransaction.md#blockhash)*

Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:103

**`description`** The checkpoint hash of the block, in hex

___

###  blockNumber

• **blockNumber**: *string*

*Inherited from [UnsignedTransaction](_util_types_.unsignedtransaction.md).[blockNumber](_util_types_.unsignedtransaction.md#blocknumber)*

Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:107

**`description`** The checkpoint block number, in hex

___

###  era

• **era**: *string*

*Inherited from [UnsignedTransaction](_util_types_.unsignedtransaction.md).[era](_util_types_.unsignedtransaction.md#era)*

Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:111

**`description`** The era for this transaction, in hex

___

###  genesisHash

• **genesisHash**: *string*

*Inherited from [UnsignedTransaction](_util_types_.unsignedtransaction.md).[genesisHash](_util_types_.unsignedtransaction.md#genesishash)*

Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:115

**`description`** The genesis hash of the chain, in hex

___

###  metadataRpc

• **metadataRpc**: *string*

*Defined in [src/util/types.ts:11](https://github.com/paritytech/txwrapper/blob/64624af/src/util/types.ts#L11)*

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`.

___

###  method

• **method**: *string*

*Inherited from [UnsignedTransaction](_util_types_.unsignedtransaction.md).[method](_util_types_.unsignedtransaction.md#method)*

Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:119

**`description`** The encoded method (with arguments) in hex

___

###  nonce

• **nonce**: *string*

*Inherited from [UnsignedTransaction](_util_types_.unsignedtransaction.md).[nonce](_util_types_.unsignedtransaction.md#nonce)*

Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:123

**`description`** The nonce for this transaction, in hex

___

###  specVersion

• **specVersion**: *string*

*Inherited from [UnsignedTransaction](_util_types_.unsignedtransaction.md).[specVersion](_util_types_.unsignedtransaction.md#specversion)*

Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:127

**`description`** The current spec version for  the runtime

___

###  tip

• **tip**: *string*

*Inherited from [UnsignedTransaction](_util_types_.unsignedtransaction.md).[tip](_util_types_.unsignedtransaction.md#tip)*

Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:131

**`description`** The tip for this transaction, in hex

___

###  version

• **version**: *number*

*Inherited from [UnsignedTransaction](_util_types_.unsignedtransaction.md).[version](_util_types_.unsignedtransaction.md#version)*

Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:135

**`description`** The version of the extrinsic we are dealing with

[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/util/types"](../modules/_src_util_types_.md) › [UnsignedTransaction](_src_util_types_.unsignedtransaction.md)

# Interface: UnsignedTransaction

JSON format for an unsigned transaction.

## Hierarchy

* SignerPayloadJSON

  ↳ **UnsignedTransaction**

## Index

### Properties

* [address](_src_util_types_.unsignedtransaction.md#address)
* [blockHash](_src_util_types_.unsignedtransaction.md#blockhash)
* [blockNumber](_src_util_types_.unsignedtransaction.md#blocknumber)
* [era](_src_util_types_.unsignedtransaction.md#era)
* [genesisHash](_src_util_types_.unsignedtransaction.md#genesishash)
* [metadataRpc](_src_util_types_.unsignedtransaction.md#metadatarpc)
* [method](_src_util_types_.unsignedtransaction.md#method)
* [nonce](_src_util_types_.unsignedtransaction.md#nonce)
* [signedExtensions](_src_util_types_.unsignedtransaction.md#signedextensions)
* [specVersion](_src_util_types_.unsignedtransaction.md#specversion)
* [tip](_src_util_types_.unsignedtransaction.md#tip)
* [transactionVersion](_src_util_types_.unsignedtransaction.md#transactionversion)
* [version](_src_util_types_.unsignedtransaction.md#version)

## Properties

###  address

• **address**: *string*

*Inherited from [UnsignedTransaction](_src_util_types_.unsignedtransaction.md).[address](_src_util_types_.unsignedtransaction.md#address)*

Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:101

**`description`** The ss-58 encoded address

___

###  blockHash

• **blockHash**: *string*

*Inherited from [UnsignedTransaction](_src_util_types_.unsignedtransaction.md).[blockHash](_src_util_types_.unsignedtransaction.md#blockhash)*

Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:105

**`description`** The checkpoint hash of the block, in hex

___

###  blockNumber

• **blockNumber**: *string*

*Inherited from [UnsignedTransaction](_src_util_types_.unsignedtransaction.md).[blockNumber](_src_util_types_.unsignedtransaction.md#blocknumber)*

Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:109

**`description`** The checkpoint block number, in hex

___

###  era

• **era**: *string*

*Inherited from [UnsignedTransaction](_src_util_types_.unsignedtransaction.md).[era](_src_util_types_.unsignedtransaction.md#era)*

Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:113

**`description`** The era for this transaction, in hex

___

###  genesisHash

• **genesisHash**: *string*

*Inherited from [UnsignedTransaction](_src_util_types_.unsignedtransaction.md).[genesisHash](_src_util_types_.unsignedtransaction.md#genesishash)*

Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:117

**`description`** The genesis hash of the chain, in hex

___

###  metadataRpc

• **metadataRpc**: *string*

*Defined in [src/util/types.ts:12](https://github.com/paritytech/txwrapper/blob/9b4a752/src/util/types.ts#L12)*

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`.

___

###  method

• **method**: *string*

*Inherited from [UnsignedTransaction](_src_util_types_.unsignedtransaction.md).[method](_src_util_types_.unsignedtransaction.md#method)*

Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:121

**`description`** The encoded method (with arguments) in hex

___

###  nonce

• **nonce**: *string*

*Inherited from [UnsignedTransaction](_src_util_types_.unsignedtransaction.md).[nonce](_src_util_types_.unsignedtransaction.md#nonce)*

Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:125

**`description`** The nonce for this transaction, in hex

___

###  signedExtensions

• **signedExtensions**: *string[]*

*Inherited from [UnsignedTransaction](_src_util_types_.unsignedtransaction.md).[signedExtensions](_src_util_types_.unsignedtransaction.md#signedextensions)*

Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:141

**`description`** The applicable signed extensions for this runtime

___

###  specVersion

• **specVersion**: *string*

*Inherited from [UnsignedTransaction](_src_util_types_.unsignedtransaction.md).[specVersion](_src_util_types_.unsignedtransaction.md#specversion)*

Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:129

**`description`** The current spec version for the runtime

___

###  tip

• **tip**: *string*

*Inherited from [UnsignedTransaction](_src_util_types_.unsignedtransaction.md).[tip](_src_util_types_.unsignedtransaction.md#tip)*

Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:133

**`description`** The tip for this transaction, in hex

___

###  transactionVersion

• **transactionVersion**: *string*

*Inherited from [UnsignedTransaction](_src_util_types_.unsignedtransaction.md).[transactionVersion](_src_util_types_.unsignedtransaction.md#transactionversion)*

Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:137

**`description`** The current transaction version for the runtime

___

###  version

• **version**: *number*

*Inherited from [UnsignedTransaction](_src_util_types_.unsignedtransaction.md).[version](_src_util_types_.unsignedtransaction.md#version)*

Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:145

**`description`** The version of the extrinsic we are dealing with

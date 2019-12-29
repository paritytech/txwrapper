[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["util/interfaces"](../modules/_util_interfaces_.md) › [UnsignedTransaction](_util_interfaces_.unsignedtransaction.md)

# Interface: UnsignedTransaction

JSON format for an unsigned transaction.

## Hierarchy

* SignerPayloadJSON

  ↳ **UnsignedTransaction**

## Index

### Properties

* [address](_util_interfaces_.unsignedtransaction.md#address)
* [blockHash](_util_interfaces_.unsignedtransaction.md#blockhash)
* [blockNumber](_util_interfaces_.unsignedtransaction.md#blocknumber)
* [era](_util_interfaces_.unsignedtransaction.md#era)
* [genesisHash](_util_interfaces_.unsignedtransaction.md#genesishash)
* [metadataRpc](_util_interfaces_.unsignedtransaction.md#metadatarpc)
* [method](_util_interfaces_.unsignedtransaction.md#method)
* [nonce](_util_interfaces_.unsignedtransaction.md#nonce)
* [specVersion](_util_interfaces_.unsignedtransaction.md#specversion)
* [tip](_util_interfaces_.unsignedtransaction.md#tip)
* [version](_util_interfaces_.unsignedtransaction.md#version)

## Properties

###  address

• **address**: *string*

*Inherited from void*

Defined in node_modules/@polkadot/types/types.d.ts:177

**`description`** The ss-58 encoded address

___

###  blockHash

• **blockHash**: *string*

*Inherited from void*

Defined in node_modules/@polkadot/types/types.d.ts:181

**`description`** The checkpoint hash of the block, in hex

___

###  blockNumber

• **blockNumber**: *string*

*Inherited from void*

Defined in node_modules/@polkadot/types/types.d.ts:185

**`description`** The checkpoint block number, in hex

___

###  era

• **era**: *string*

*Inherited from void*

Defined in node_modules/@polkadot/types/types.d.ts:189

**`description`** The era for this transaction, in hex

___

###  genesisHash

• **genesisHash**: *string*

*Inherited from void*

Defined in node_modules/@polkadot/types/types.d.ts:193

**`description`** The genesis hash of the chain, in hex

___

###  metadataRpc

• **metadataRpc**: *string*

*Defined in [src/util/interfaces.ts:11](https://github.com/paritytech/txwrapper/blob/0fb6503/src/util/interfaces.ts#L11)*

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`.

___

###  method

• **method**: *string*

*Inherited from void*

Defined in node_modules/@polkadot/types/types.d.ts:197

**`description`** The encoded method (with arguments) in hex

___

###  nonce

• **nonce**: *string*

*Inherited from void*

Defined in node_modules/@polkadot/types/types.d.ts:201

**`description`** The nonce for this transaction, in hex

___

###  specVersion

• **specVersion**: *string*

*Inherited from void*

Defined in node_modules/@polkadot/types/types.d.ts:205

**`description`** The current spec version for  the runtime

___

###  tip

• **tip**: *string*

*Inherited from void*

Defined in node_modules/@polkadot/types/types.d.ts:209

**`description`** The tip for this transaction, in hex

___

###  version

• **version**: *number*

*Inherited from void*

Defined in node_modules/@polkadot/types/types.d.ts:213

**`description`** The version of the extrinsic we are dealing with

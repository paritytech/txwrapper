[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["staking/unbond"](../modules/_staking_unbond_.md) › [UnsignedUnbondTransaction](_staking_unbond_.unsignedunbondtransaction.md)

# Interface: UnsignedUnbondTransaction

JSON format for an unsigned transaction

## Hierarchy

* SignerPayloadJSON

  ↳ **UnsignedUnbondTransaction**

## Index

### Properties

* [address](_staking_unbond_.unsignedunbondtransaction.md#address)
* [blockHash](_staking_unbond_.unsignedunbondtransaction.md#blockhash)
* [blockNumber](_staking_unbond_.unsignedunbondtransaction.md#blocknumber)
* [era](_staking_unbond_.unsignedunbondtransaction.md#era)
* [genesisHash](_staking_unbond_.unsignedunbondtransaction.md#genesishash)
* [metadataRpc](_staking_unbond_.unsignedunbondtransaction.md#metadatarpc)
* [method](_staking_unbond_.unsignedunbondtransaction.md#method)
* [nonce](_staking_unbond_.unsignedunbondtransaction.md#nonce)
* [specVersion](_staking_unbond_.unsignedunbondtransaction.md#specversion)
* [tip](_staking_unbond_.unsignedunbondtransaction.md#tip)
* [version](_staking_unbond_.unsignedunbondtransaction.md#version)

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

*Defined in [src/staking/unbond.ts:16](https://github.com/paritytech/txwrapper/blob/29e727e/src/staking/unbond.ts#L16)*

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

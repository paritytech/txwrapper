[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["staking/nominate"](../modules/_staking_nominate_.md) › [UnsignedNominateTransaction](_staking_nominate_.unsignednominatetransaction.md)

# Interface: UnsignedNominateTransaction

JSON format for an unsigned transaction

## Hierarchy

* SignerPayloadJSON

  ↳ **UnsignedNominateTransaction**

## Index

### Properties

* [address](_staking_nominate_.unsignednominatetransaction.md#address)
* [blockHash](_staking_nominate_.unsignednominatetransaction.md#blockhash)
* [blockNumber](_staking_nominate_.unsignednominatetransaction.md#blocknumber)
* [era](_staking_nominate_.unsignednominatetransaction.md#era)
* [genesisHash](_staking_nominate_.unsignednominatetransaction.md#genesishash)
* [metadataRpc](_staking_nominate_.unsignednominatetransaction.md#metadatarpc)
* [method](_staking_nominate_.unsignednominatetransaction.md#method)
* [nonce](_staking_nominate_.unsignednominatetransaction.md#nonce)
* [specVersion](_staking_nominate_.unsignednominatetransaction.md#specversion)
* [tip](_staking_nominate_.unsignednominatetransaction.md#tip)
* [version](_staking_nominate_.unsignednominatetransaction.md#version)

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

*Defined in [src/staking/nominate.ts:16](https://github.com/paritytech/txwrapper/blob/29e727e/src/staking/nominate.ts#L16)*

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

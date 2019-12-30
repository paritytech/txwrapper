[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["util/types"](../modules/_util_types_.md) › [BaseTxInfo](_util_types_.basetxinfo.md)

# Interface: BaseTxInfo

JSON format for information that is common to all transactions.

## Hierarchy

* **BaseTxInfo**

  ↳ [TxInfoTransfer](_balancetransfer_.txinfotransfer.md)

  ↳ [TxInfoBond](_staking_stakingtxtypeutils_.txinfobond.md)

  ↳ [TxInfoNominate](_staking_stakingtxtypeutils_.txinfonominate.md)

  ↳ [TxInfoUnbond](_staking_stakingtxtypeutils_.txinfounbond.md)

## Index

### Properties

* [address](_util_types_.basetxinfo.md#address)
* [blockHash](_util_types_.basetxinfo.md#blockhash)
* [blockNumber](_util_types_.basetxinfo.md#blocknumber)
* [genesisHash](_util_types_.basetxinfo.md#genesishash)
* [metadataRpc](_util_types_.basetxinfo.md#metadatarpc)
* [nonce](_util_types_.basetxinfo.md#nonce)
* [specVersion](_util_types_.basetxinfo.md#specversion)
* [tip](_util_types_.basetxinfo.md#tip)
* [validityPeriod](_util_types_.basetxinfo.md#validityperiod)

## Properties

###  address

• **address**: *string*

*Defined in [src/util/types.ts:21](https://github.com/paritytech/txwrapper/blob/fcbe6db/src/util/types.ts#L21)*

The ss-58 encoded address of the sending account.

___

###  blockHash

• **blockHash**: *string*

*Defined in [src/util/types.ts:25](https://github.com/paritytech/txwrapper/blob/fcbe6db/src/util/types.ts#L25)*

The checkpoint hash of the block, in hex.

___

###  blockNumber

• **blockNumber**: *number*

*Defined in [src/util/types.ts:29](https://github.com/paritytech/txwrapper/blob/fcbe6db/src/util/types.ts#L29)*

The checkpoint block number (u32), in hex.

___

###  genesisHash

• **genesisHash**: *string*

*Defined in [src/util/types.ts:33](https://github.com/paritytech/txwrapper/blob/fcbe6db/src/util/types.ts#L33)*

The genesis hash of the chain, in hex.

___

###  metadataRpc

• **metadataRpc**: *string*

*Defined in [src/util/types.ts:38](https://github.com/paritytech/txwrapper/blob/fcbe6db/src/util/types.ts#L38)*

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`.

___

###  nonce

• **nonce**: *number*

*Defined in [src/util/types.ts:42](https://github.com/paritytech/txwrapper/blob/fcbe6db/src/util/types.ts#L42)*

The nonce for this transaction.

___

###  specVersion

• **specVersion**: *number*

*Defined in [src/util/types.ts:46](https://github.com/paritytech/txwrapper/blob/fcbe6db/src/util/types.ts#L46)*

The current spec version for the runtime.

___

###  tip

• **tip**: *number*

*Defined in [src/util/types.ts:50](https://github.com/paritytech/txwrapper/blob/fcbe6db/src/util/types.ts#L50)*

The tip for this transaction, in hex.

___

###  validityPeriod

• **validityPeriod**: *number*

*Defined in [src/util/types.ts:55](https://github.com/paritytech/txwrapper/blob/fcbe6db/src/util/types.ts#L55)*

The amount of time (in second) the transaction is valid for. Will be
translated into a mortal era.

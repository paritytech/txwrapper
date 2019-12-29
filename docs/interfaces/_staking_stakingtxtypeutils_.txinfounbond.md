[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["staking/stakingTxTypeUtils"](../modules/_staking_stakingtxtypeutils_.md) › [TxInfoUnbond](_staking_stakingtxtypeutils_.txinfounbond.md)

# Interface: TxInfoUnbond

## Hierarchy

* [BaseTxInfo](_util_interfaces_.basetxinfo.md)

  ↳ **TxInfoUnbond**

## Index

### Properties

* [address](_staking_stakingtxtypeutils_.txinfounbond.md#address)
* [blockHash](_staking_stakingtxtypeutils_.txinfounbond.md#blockhash)
* [blockNumber](_staking_stakingtxtypeutils_.txinfounbond.md#blocknumber)
* [genesisHash](_staking_stakingtxtypeutils_.txinfounbond.md#genesishash)
* [metadataRpc](_staking_stakingtxtypeutils_.txinfounbond.md#metadatarpc)
* [nonce](_staking_stakingtxtypeutils_.txinfounbond.md#nonce)
* [specVersion](_staking_stakingtxtypeutils_.txinfounbond.md#specversion)
* [tip](_staking_stakingtxtypeutils_.txinfounbond.md#tip)
* [validityPeriod](_staking_stakingtxtypeutils_.txinfounbond.md#validityperiod)
* [value](_staking_stakingtxtypeutils_.txinfounbond.md#value)

## Properties

###  address

• **address**: *string*

*Inherited from [BaseTxInfo](_util_interfaces_.basetxinfo.md).[address](_util_interfaces_.basetxinfo.md#address)*

*Defined in [src/util/interfaces.ts:21](https://github.com/paritytech/txwrapper/blob/0fb6503/src/util/interfaces.ts#L21)*

The ss-58 encoded address of the sending account.

___

###  blockHash

• **blockHash**: *string*

*Inherited from [BaseTxInfo](_util_interfaces_.basetxinfo.md).[blockHash](_util_interfaces_.basetxinfo.md#blockhash)*

*Defined in [src/util/interfaces.ts:25](https://github.com/paritytech/txwrapper/blob/0fb6503/src/util/interfaces.ts#L25)*

The checkpoint hash of the block, in hex.

___

###  blockNumber

• **blockNumber**: *number*

*Inherited from [BaseTxInfo](_util_interfaces_.basetxinfo.md).[blockNumber](_util_interfaces_.basetxinfo.md#blocknumber)*

*Defined in [src/util/interfaces.ts:29](https://github.com/paritytech/txwrapper/blob/0fb6503/src/util/interfaces.ts#L29)*

The checkpoint block number (u32), in hex.

___

###  genesisHash

• **genesisHash**: *string*

*Inherited from [BaseTxInfo](_util_interfaces_.basetxinfo.md).[genesisHash](_util_interfaces_.basetxinfo.md#genesishash)*

*Defined in [src/util/interfaces.ts:33](https://github.com/paritytech/txwrapper/blob/0fb6503/src/util/interfaces.ts#L33)*

The genesis hash of the chain, in hex.

___

###  metadataRpc

• **metadataRpc**: *string*

*Inherited from [BaseTxInfo](_util_interfaces_.basetxinfo.md).[metadataRpc](_util_interfaces_.basetxinfo.md#metadatarpc)*

*Defined in [src/util/interfaces.ts:38](https://github.com/paritytech/txwrapper/blob/0fb6503/src/util/interfaces.ts#L38)*

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`.

___

###  nonce

• **nonce**: *number*

*Inherited from [BaseTxInfo](_util_interfaces_.basetxinfo.md).[nonce](_util_interfaces_.basetxinfo.md#nonce)*

*Defined in [src/util/interfaces.ts:42](https://github.com/paritytech/txwrapper/blob/0fb6503/src/util/interfaces.ts#L42)*

The nonce for this transaction.

___

###  specVersion

• **specVersion**: *number*

*Inherited from [BaseTxInfo](_util_interfaces_.basetxinfo.md).[specVersion](_util_interfaces_.basetxinfo.md#specversion)*

*Defined in [src/util/interfaces.ts:46](https://github.com/paritytech/txwrapper/blob/0fb6503/src/util/interfaces.ts#L46)*

The current spec version for the runtime.

___

###  tip

• **tip**: *number*

*Inherited from [BaseTxInfo](_util_interfaces_.basetxinfo.md).[tip](_util_interfaces_.basetxinfo.md#tip)*

*Defined in [src/util/interfaces.ts:50](https://github.com/paritytech/txwrapper/blob/0fb6503/src/util/interfaces.ts#L50)*

The tip for this transaction, in hex.

___

###  validityPeriod

• **validityPeriod**: *number*

*Inherited from [BaseTxInfo](_util_interfaces_.basetxinfo.md).[validityPeriod](_util_interfaces_.basetxinfo.md#validityperiod)*

*Defined in [src/util/interfaces.ts:55](https://github.com/paritytech/txwrapper/blob/0fb6503/src/util/interfaces.ts#L55)*

The amount of time (in second) the transaction is valid for. Will be
translated into a mortal era.

___

###  value

• **value**: *number*

*Defined in [src/staking/stakingTxTypeUtils.ts:32](https://github.com/paritytech/txwrapper/blob/0fb6503/src/staking/stakingTxTypeUtils.ts#L32)*

The number of tokens to unbond.

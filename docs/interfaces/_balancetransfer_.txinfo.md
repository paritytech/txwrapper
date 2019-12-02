[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["balanceTransfer"](../modules/_balancetransfer_.md) › [TxInfo](_balancetransfer_.txinfo.md)

# Interface: TxInfo

## Hierarchy

* **TxInfo**

## Index

### Properties

* [address](_balancetransfer_.txinfo.md#address)
* [amount](_balancetransfer_.txinfo.md#amount)
* [blockHash](_balancetransfer_.txinfo.md#blockhash)
* [blockNumber](_balancetransfer_.txinfo.md#blocknumber)
* [genesisHash](_balancetransfer_.txinfo.md#genesishash)
* [metadataRpc](_balancetransfer_.txinfo.md#metadatarpc)
* [nonce](_balancetransfer_.txinfo.md#nonce)
* [specVersion](_balancetransfer_.txinfo.md#specversion)
* [tip](_balancetransfer_.txinfo.md#tip)
* [to](_balancetransfer_.txinfo.md#to)
* [validityPeriod](_balancetransfer_.txinfo.md#validityperiod)

## Properties

###  address

• **address**: *string*

*Defined in [src/balanceTransfer.ts:22](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/6203cdc/src/balanceTransfer.ts#L22)*

The ss-58 encoded address

___

###  amount

• **amount**: *number*

*Defined in [src/balanceTransfer.ts:26](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/6203cdc/src/balanceTransfer.ts#L26)*

The amount to send

___

###  blockHash

• **blockHash**: *string*

*Defined in [src/balanceTransfer.ts:30](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/6203cdc/src/balanceTransfer.ts#L30)*

The checkpoint hash of the block, in hex

___

###  blockNumber

• **blockNumber**: *number*

*Defined in [src/balanceTransfer.ts:34](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/6203cdc/src/balanceTransfer.ts#L34)*

The checkpoint block number (u32), in hex

___

###  genesisHash

• **genesisHash**: *string*

*Defined in [src/balanceTransfer.ts:38](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/6203cdc/src/balanceTransfer.ts#L38)*

The genesis hash of the chain, in hex

___

###  metadataRpc

• **metadataRpc**: *string*

*Defined in [src/balanceTransfer.ts:43](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/6203cdc/src/balanceTransfer.ts#L43)*

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`

___

###  nonce

• **nonce**: *number*

*Defined in [src/balanceTransfer.ts:47](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/6203cdc/src/balanceTransfer.ts#L47)*

The nonce for this transaction,

___

###  specVersion

• **specVersion**: *number*

*Defined in [src/balanceTransfer.ts:51](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/6203cdc/src/balanceTransfer.ts#L51)*

The current spec version for the runtime

___

###  tip

• **tip**: *number*

*Defined in [src/balanceTransfer.ts:55](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/6203cdc/src/balanceTransfer.ts#L55)*

The tip for this transaction, in hex

___

###  to

• **to**: *string*

*Defined in [src/balanceTransfer.ts:59](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/6203cdc/src/balanceTransfer.ts#L59)*

The recipient address, ss-58 encoded

___

###  validityPeriod

• **validityPeriod**: *number*

*Defined in [src/balanceTransfer.ts:64](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/6203cdc/src/balanceTransfer.ts#L64)*

The amount of time (in second) the transaction is valid for. Will be
translated into a mortal era

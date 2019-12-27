[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["balanceTransfer"](../modules/_balancetransfer_.md) › [TxInfoTransfer](_balancetransfer_.txinfotransfer.md)

# Interface: TxInfoTransfer

## Hierarchy

* **TxInfoTransfer**

## Index

### Properties

* [address](_balancetransfer_.txinfotransfer.md#address)
* [amount](_balancetransfer_.txinfotransfer.md#amount)
* [blockHash](_balancetransfer_.txinfotransfer.md#blockhash)
* [blockNumber](_balancetransfer_.txinfotransfer.md#blocknumber)
* [genesisHash](_balancetransfer_.txinfotransfer.md#genesishash)
* [keepAlive](_balancetransfer_.txinfotransfer.md#optional-keepalive)
* [metadataRpc](_balancetransfer_.txinfotransfer.md#metadatarpc)
* [nonce](_balancetransfer_.txinfotransfer.md#nonce)
* [specVersion](_balancetransfer_.txinfotransfer.md#specversion)
* [tip](_balancetransfer_.txinfotransfer.md#tip)
* [to](_balancetransfer_.txinfotransfer.md#to)
* [validityPeriod](_balancetransfer_.txinfotransfer.md#validityperiod)

## Properties

###  address

• **address**: *string*

*Defined in [src/balanceTransfer.ts:10](https://github.com/paritytech/txwrapper/blob/b01afa4/src/balanceTransfer.ts#L10)*

The ss-58 encoded address

___

###  amount

• **amount**: *number*

*Defined in [src/balanceTransfer.ts:14](https://github.com/paritytech/txwrapper/blob/b01afa4/src/balanceTransfer.ts#L14)*

The amount to send

___

###  blockHash

• **blockHash**: *string*

*Defined in [src/balanceTransfer.ts:18](https://github.com/paritytech/txwrapper/blob/b01afa4/src/balanceTransfer.ts#L18)*

The checkpoint hash of the block, in hex

___

###  blockNumber

• **blockNumber**: *number*

*Defined in [src/balanceTransfer.ts:22](https://github.com/paritytech/txwrapper/blob/b01afa4/src/balanceTransfer.ts#L22)*

The checkpoint block number (u32), in hex

___

###  genesisHash

• **genesisHash**: *string*

*Defined in [src/balanceTransfer.ts:26](https://github.com/paritytech/txwrapper/blob/b01afa4/src/balanceTransfer.ts#L26)*

The genesis hash of the chain, in hex

___

### `Optional` keepAlive

• **keepAlive**? : *undefined | false | true*

*Defined in [src/balanceTransfer.ts:30](https://github.com/paritytech/txwrapper/blob/b01afa4/src/balanceTransfer.ts#L30)*

Use balances::transfer_keep_alive instead of balances::transfer

___

###  metadataRpc

• **metadataRpc**: *string*

*Defined in [src/balanceTransfer.ts:35](https://github.com/paritytech/txwrapper/blob/b01afa4/src/balanceTransfer.ts#L35)*

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`

___

###  nonce

• **nonce**: *number*

*Defined in [src/balanceTransfer.ts:39](https://github.com/paritytech/txwrapper/blob/b01afa4/src/balanceTransfer.ts#L39)*

The nonce for this transaction,

___

###  specVersion

• **specVersion**: *number*

*Defined in [src/balanceTransfer.ts:43](https://github.com/paritytech/txwrapper/blob/b01afa4/src/balanceTransfer.ts#L43)*

The current spec version for the runtime

___

###  tip

• **tip**: *number*

*Defined in [src/balanceTransfer.ts:47](https://github.com/paritytech/txwrapper/blob/b01afa4/src/balanceTransfer.ts#L47)*

The tip for this transaction, in hex

___

###  to

• **to**: *string*

*Defined in [src/balanceTransfer.ts:51](https://github.com/paritytech/txwrapper/blob/b01afa4/src/balanceTransfer.ts#L51)*

The recipient address, ss-58 encoded

___

###  validityPeriod

• **validityPeriod**: *number*

*Defined in [src/balanceTransfer.ts:56](https://github.com/paritytech/txwrapper/blob/b01afa4/src/balanceTransfer.ts#L56)*

The amount of time (in second) the transaction is valid for. Will be
translated into a mortal era

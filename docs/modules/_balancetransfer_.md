[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["balanceTransfer"](_balancetransfer_.md)

# External module: "balanceTransfer"

## Index

### Interfaces

* [TxInfo](../interfaces/_balancetransfer_.txinfo.md)

### Type aliases

* [UnsignedTransaction](_balancetransfer_.md#unsignedtransaction)

### Variables

* [BLOCKTIME](_balancetransfer_.md#const-blocktime)
* [DEFAULT_MORTAL_LENGTH](_balancetransfer_.md#const-default_mortal_length)
* [ONE_MINUTE](_balancetransfer_.md#const-one_minute)

### Functions

* [balanceTransfer](_balancetransfer_.md#balancetransfer)

## Type aliases

###  UnsignedTransaction

Ƭ **UnsignedTransaction**: *SignerPayloadJSON*

*Defined in [balanceTransfer.ts:10](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/07b7ece/src/balanceTransfer.ts#L10)*

JSON format for an unsigned transaction

## Variables

### `Const` BLOCKTIME

• **BLOCKTIME**: *6* = 6

*Defined in [balanceTransfer.ts:57](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/07b7ece/src/balanceTransfer.ts#L57)*

___

### `Const` DEFAULT_MORTAL_LENGTH

• **DEFAULT_MORTAL_LENGTH**: *number* =  240 * ONE_MINUTE

*Defined in [balanceTransfer.ts:59](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/07b7ece/src/balanceTransfer.ts#L59)*

___

### `Const` ONE_MINUTE

• **ONE_MINUTE**: *number* =  60 / BLOCKTIME

*Defined in [balanceTransfer.ts:58](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/07b7ece/src/balanceTransfer.ts#L58)*

## Functions

###  balanceTransfer

▸ **balanceTransfer**(`info`: [TxInfo](../interfaces/_balancetransfer_.txinfo.md)): *[UnsignedTransaction](_balancetransfer_.md#unsignedtransaction)*

*Defined in [balanceTransfer.ts:68](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/07b7ece/src/balanceTransfer.ts#L68)*

Construct a balance transfer transaction offline. Transactions can be
constructed in such a way that it is valid for at least 240 minutes

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`info` | [TxInfo](../interfaces/_balancetransfer_.txinfo.md) | Information required to construct the transaction |

**Returns:** *[UnsignedTransaction](_balancetransfer_.md#unsignedtransaction)*

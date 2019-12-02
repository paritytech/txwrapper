[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["balanceTransfer"](_balancetransfer_.md)

# External module: "balanceTransfer"

## Index

### Interfaces

* [TxInfo](../interfaces/_balancetransfer_.txinfo.md)
* [UnsignedTransaction](../interfaces/_balancetransfer_.unsignedtransaction.md)

### Variables

* [BLOCKTIME](_balancetransfer_.md#const-blocktime)
* [ONE_SECOND](_balancetransfer_.md#const-one_second)

### Functions

* [balanceTransfer](_balancetransfer_.md#balancetransfer)

## Variables

### `Const` BLOCKTIME

• **BLOCKTIME**: *6* = 6

*Defined in [src/balanceTransfer.ts:68](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/6203cdc/src/balanceTransfer.ts#L68)*

___

### `Const` ONE_SECOND

• **ONE_SECOND**: *number* =  1 / BLOCKTIME

*Defined in [src/balanceTransfer.ts:69](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/6203cdc/src/balanceTransfer.ts#L69)*

## Functions

###  balanceTransfer

▸ **balanceTransfer**(`info`: [TxInfo](../interfaces/_balancetransfer_.txinfo.md)): *[UnsignedTransaction](../interfaces/_balancetransfer_.unsignedtransaction.md)*

*Defined in [src/balanceTransfer.ts:78](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/6203cdc/src/balanceTransfer.ts#L78)*

Construct a balance transfer transaction offline. Transactions can be
constructed in such a way that it is valid for at least 240 minutes

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`info` | [TxInfo](../interfaces/_balancetransfer_.txinfo.md) | Information required to construct the transaction |

**Returns:** *[UnsignedTransaction](../interfaces/_balancetransfer_.unsignedtransaction.md)*

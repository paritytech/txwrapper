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

*Defined in [src/balanceTransfer.ts:72](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/9e2988f/src/balanceTransfer.ts#L72)*

___

### `Const` ONE_SECOND

• **ONE_SECOND**: *number* =  1 / BLOCKTIME

*Defined in [src/balanceTransfer.ts:73](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/9e2988f/src/balanceTransfer.ts#L73)*

## Functions

###  balanceTransfer

▸ **balanceTransfer**(`info`: [TxInfo](../interfaces/_balancetransfer_.txinfo.md)): *[UnsignedTransaction](../interfaces/_balancetransfer_.unsignedtransaction.md)*

*Defined in [src/balanceTransfer.ts:82](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/9e2988f/src/balanceTransfer.ts#L82)*

Construct a balance transfer transaction offline. Transactions can be
constructed in such a way that it is valid for at least 240 minutes

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`info` | [TxInfo](../interfaces/_balancetransfer_.txinfo.md) | Information required to construct the transaction |

**Returns:** *[UnsignedTransaction](../interfaces/_balancetransfer_.unsignedtransaction.md)*

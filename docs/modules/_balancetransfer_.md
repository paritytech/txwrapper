[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["balanceTransfer"](_balancetransfer_.md)

# External module: "balanceTransfer"

## Index

### Interfaces

* [TxInfo](../interfaces/_balancetransfer_.txinfo.md)

### Functions

* [balanceTransfer](_balancetransfer_.md#balancetransfer)

## Functions

###  balanceTransfer

▸ **balanceTransfer**(`info`: [TxInfo](../interfaces/_balancetransfer_.txinfo.md)): *[UnsignedTransaction](../interfaces/_util_interfaces_.unsignedtransaction.md)*

*Defined in [src/balanceTransfer.ts:65](https://github.com/paritytech/txwrapper/blob/ef34f88/src/balanceTransfer.ts#L65)*

Construct a balance transfer transaction offline. Transactions can be
constructed in such a way that they are valid for at least 240 minutes.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`info` | [TxInfo](../interfaces/_balancetransfer_.txinfo.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_interfaces_.unsignedtransaction.md)*

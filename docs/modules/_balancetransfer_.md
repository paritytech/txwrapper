[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["balanceTransfer"](_balancetransfer_.md)

# External module: "balanceTransfer"

## Index

### Interfaces

* [TxInfoTransfer](../interfaces/_balancetransfer_.txinfotransfer.md)

### Functions

* [balanceTransfer](_balancetransfer_.md#balancetransfer)

## Functions

###  balanceTransfer

▸ **balanceTransfer**(`info`: [TxInfoTransfer](../interfaces/_balancetransfer_.txinfotransfer.md)): *[UnsignedTransaction](../interfaces/_util_interfaces_.unsignedtransaction.md)*

*Defined in [src/balanceTransfer.ts:28](https://github.com/paritytech/txwrapper/blob/0fb6503/src/balanceTransfer.ts#L28)*

Construct a balance transfer transaction offline. Transactions can be
constructed in such a way that they are valid for at least 240 minutes.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`info` | [TxInfoTransfer](../interfaces/_balancetransfer_.txinfotransfer.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_interfaces_.unsignedtransaction.md)*

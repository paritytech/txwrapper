[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["balanceTransfer"](_balancetransfer_.md)

# External module: "balanceTransfer"

## Index

### Interfaces

* [TxInfo](../interfaces/_balancetransfer_.txinfo.md)
* [UnsignedTransaction](../interfaces/_balancetransfer_.unsignedtransaction.md)

### Functions

* [balanceTransfer](_balancetransfer_.md#balancetransfer)

## Functions

###  balanceTransfer

▸ **balanceTransfer**(`info`: [TxInfo](../interfaces/_balancetransfer_.txinfo.md)): *[UnsignedTransaction](../interfaces/_balancetransfer_.unsignedtransaction.md)*

*Defined in [src/balanceTransfer.ts:78](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/91a53f7/src/balanceTransfer.ts#L78)*

Construct a balance transfer transaction offline. Transactions can be
constructed in such a way that it is valid for at least 240 minutes

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`info` | [TxInfo](../interfaces/_balancetransfer_.txinfo.md) | Information required to construct the transaction |

**Returns:** *[UnsignedTransaction](../interfaces/_balancetransfer_.unsignedtransaction.md)*

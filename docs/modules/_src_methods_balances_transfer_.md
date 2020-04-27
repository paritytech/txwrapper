[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/balances/transfer"](_src_methods_balances_transfer_.md)

# Module: "src/methods/balances/transfer"

## Index

### Interfaces

* [BalancesTransferArgs](../interfaces/_src_methods_balances_transfer_.balancestransferargs.md)

### Functions

* [transfer](_src_methods_balances_transfer_.md#transfer)

## Functions

###  transfer

▸ **transfer**(`args`: [BalancesTransferArgs](../interfaces/_src_methods_balances_transfer_.balancestransferargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options?`: Partial‹[Options](../interfaces/_src_util_options_.options.md)›): *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/balances/transfer.ts:25](https://github.com/paritytech/txwrapper/blob/38b3ce8/src/methods/balances/transfer.ts#L25)*

Construct a balance transfer transaction offline.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [BalancesTransferArgs](../interfaces/_src_methods_balances_transfer_.balancestransferargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction.  |
`options?` | Partial‹[Options](../interfaces/_src_util_options_.options.md)› | - |

**Returns:** *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

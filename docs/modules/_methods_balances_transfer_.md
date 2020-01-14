[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["methods/balances/transfer"](_methods_balances_transfer_.md)

# External module: "methods/balances/transfer"

## Index

### Interfaces

* [BalancesTransferArgs](../interfaces/_methods_balances_transfer_.balancestransferargs.md)

### Functions

* [transfer](_methods_balances_transfer_.md#transfer)

## Functions

###  transfer

▸ **transfer**(`args`: [BalancesTransferArgs](../interfaces/_methods_balances_transfer_.balancestransferargs.md), `info`: [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md)): *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/balances/transfer.ts:24](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/82747d9/src/methods/balances/transfer.ts#L24)*

Construct a balance transfer transaction offline.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [BalancesTransferArgs](../interfaces/_methods_balances_transfer_.balancestransferargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/balances/transferKeepAlive"](_src_methods_balances_transferkeepalive_.md)

# Module: "src/methods/balances/transferKeepAlive"

## Index

### Type aliases

* [BalancesTransferKeepAliveArgs](_src_methods_balances_transferkeepalive_.md#balancestransferkeepaliveargs)

### Functions

* [transferKeepAlive](_src_methods_balances_transferkeepalive_.md#transferkeepalive)

## Type aliases

###  BalancesTransferKeepAliveArgs

Ƭ **BalancesTransferKeepAliveArgs**: *[BalancesTransferArgs](../interfaces/_src_methods_balances_transfer_.balancestransferargs.md)*

*Defined in [src/methods/balances/transferKeepAlive.ts:9](https://github.com/paritytech/txwrapper/blob/d1bfb8b/src/methods/balances/transferKeepAlive.ts#L9)*

## Functions

###  transferKeepAlive

▸ **transferKeepAlive**(`args`: [BalancesTransferKeepAliveArgs](_src_methods_balances_transferkeepalive_.md#balancestransferkeepaliveargs), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options?`: Partial‹[Options](../interfaces/_src_util_options_.options.md)›): *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/balances/transferKeepAlive.ts:16](https://github.com/paritytech/txwrapper/blob/d1bfb8b/src/methods/balances/transferKeepAlive.ts#L16)*

Construct a balance transfer transaction offline.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [BalancesTransferKeepAliveArgs](_src_methods_balances_transferkeepalive_.md#balancestransferkeepaliveargs) | - |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction.  |
`options?` | Partial‹[Options](../interfaces/_src_util_options_.options.md)› | - |

**Returns:** *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

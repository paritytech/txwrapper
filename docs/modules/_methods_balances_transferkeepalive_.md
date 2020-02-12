[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["methods/balances/transferKeepAlive"](_methods_balances_transferkeepalive_.md)

# External module: "methods/balances/transferKeepAlive"

## Index

### Type aliases

* [BalancesTransferKeepAliveArgs](_methods_balances_transferkeepalive_.md#balancestransferkeepaliveargs)

### Functions

* [transferKeepAlive](_methods_balances_transferkeepalive_.md#transferkeepalive)

## Type aliases

###  BalancesTransferKeepAliveArgs

Ƭ **BalancesTransferKeepAliveArgs**: *[BalancesTransferArgs](../interfaces/_methods_balances_transfer_.balancestransferargs.md)*

*Defined in [src/methods/balances/transferKeepAlive.ts:4](https://github.com/paritytech/txwrapper/blob/57a1bc2/src/methods/balances/transferKeepAlive.ts#L4)*

## Functions

###  transferKeepAlive

▸ **transferKeepAlive**(`args`: [BalancesTransferKeepAliveArgs](_methods_balances_transferkeepalive_.md#balancestransferkeepaliveargs), `info`: [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md)): *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/balances/transferKeepAlive.ts:11](https://github.com/paritytech/txwrapper/blob/57a1bc2/src/methods/balances/transferKeepAlive.ts#L11)*

Construct a balance transfer transaction offline.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [BalancesTransferKeepAliveArgs](_methods_balances_transferkeepalive_.md#balancestransferkeepaliveargs) | - |
`info` | [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

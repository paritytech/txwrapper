[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/vesting/vest"](_src_methods_vesting_vest_.md)

# Module: "src/methods/vesting/vest"

## Index

### Functions

* [vest](_src_methods_vesting_vest_.md#vest)

## Functions

###  vest

▸ **vest**(`args`: object, `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options?`: Partial‹[Options](../interfaces/_src_util_options_.options.md)›): *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/vesting/vest.ts:13](https://github.com/paritytech/txwrapper/blob/fc81d5b/src/methods/vesting/vest.ts#L13)*

Unlock any vested funds of the sender account.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | object | - |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction.  |
`options?` | Partial‹[Options](../interfaces/_src_util_options_.options.md)› | - |

**Returns:** *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

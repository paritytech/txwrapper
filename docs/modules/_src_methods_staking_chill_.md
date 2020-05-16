[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/staking/chill"](_src_methods_staking_chill_.md)

# Module: "src/methods/staking/chill"

## Index

### Functions

* [chill](_src_methods_staking_chill_.md#chill)

## Functions

###  chill

▸ **chill**(`args`: object, `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/staking/chill.ts:13](https://github.com/paritytech/txwrapper/blob/840775d/src/methods/staking/chill.ts#L13)*

Declare the desire to cease validating or nominating. Does not unbond funds.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | object | - |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction.  |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | - |

**Returns:** *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

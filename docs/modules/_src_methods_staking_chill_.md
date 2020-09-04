[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/staking/chill"](_src_methods_staking_chill_.md)

# Module: "src/methods/staking/chill"

## Index

### Functions

* [chill](_src_methods_staking_chill_.md#chill)

## Functions

###  chill

▸ **chill**(`args`: object, `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/staking/chill.ts:17](https://github.com/paritytech/txwrapper/blob/6ef1ba4/src/methods/staking/chill.ts#L17)*

Declare the desire to cease validating or nominating. Does not unbond funds.

Can only be called when `EraElectionStatus` is `Closed`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | object | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

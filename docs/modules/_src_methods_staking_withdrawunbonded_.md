[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/staking/withdrawUnbonded"](_src_methods_staking_withdrawunbonded_.md)

# Module: "src/methods/staking/withdrawUnbonded"

## Index

### Functions

* [withdrawUnbonded](_src_methods_staking_withdrawunbonded_.md#withdrawunbonded)

## Functions

###  withdrawUnbonded

▸ **withdrawUnbonded**(`args`: object, `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options?`: Partial‹[Options](../interfaces/_src_util_options_.options.md)›): *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/staking/withdrawUnbonded.ts:13](https://github.com/paritytech/txwrapper/blob/c52e67f/src/methods/staking/withdrawUnbonded.ts#L13)*

Remove any unlocked chunks from the `unlocking` queue from our management.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | object | - |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction.  |
`options?` | Partial‹[Options](../interfaces/_src_util_options_.options.md)› | - |

**Returns:** *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/staking/setController"](_src_methods_staking_setcontroller_.md)

# Module: "src/methods/staking/setController"

## Index

### Interfaces

* [StakingSetControllerArgs](../interfaces/_src_methods_staking_setcontroller_.stakingsetcontrollerargs.md)

### Functions

* [setController](_src_methods_staking_setcontroller_.md#setcontroller)

## Functions

###  setController

▸ **setController**(`args`: [StakingSetControllerArgs](../interfaces/_src_methods_staking_setcontroller_.stakingsetcontrollerargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/staking/setController.ts:22](https://github.com/paritytech/txwrapper/blob/7569e9a/src/methods/staking/setController.ts#L22)*

(Re-)set the controller of a stash. Effects will be felt at the beginning of
the next era.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [StakingSetControllerArgs](../interfaces/_src_methods_staking_setcontroller_.stakingsetcontrollerargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction.  |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | - |

**Returns:** *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

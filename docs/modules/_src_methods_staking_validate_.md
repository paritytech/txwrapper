[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/staking/validate"](_src_methods_staking_validate_.md)

# Module: "src/methods/staking/validate"

## Index

### Interfaces

* [StakingValidateArgs](../interfaces/_src_methods_staking_validate_.stakingvalidateargs.md)

### Functions

* [validate](_src_methods_staking_validate_.md#validate)

## Functions

###  validate

▸ **validate**(`args`: [StakingValidateArgs](../interfaces/_src_methods_staking_validate_.stakingvalidateargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options?`: Partial‹[Options](../interfaces/_src_util_options_.options.md)›): *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/staking/validate.ts:23](https://github.com/paritytech/txwrapper/blob/fc81d5b/src/methods/staking/validate.ts#L23)*

Declare the desire to validate for the origin controller.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [StakingValidateArgs](../interfaces/_src_methods_staking_validate_.stakingvalidateargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction.  |
`options?` | Partial‹[Options](../interfaces/_src_util_options_.options.md)› | - |

**Returns:** *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

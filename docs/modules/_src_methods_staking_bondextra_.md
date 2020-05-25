[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/staking/bondExtra"](_src_methods_staking_bondextra_.md)

# Module: "src/methods/staking/bondExtra"

## Index

### Interfaces

* [StakingBondExtraArgs](../interfaces/_src_methods_staking_bondextra_.stakingbondextraargs.md)

### Functions

* [bondExtra](_src_methods_staking_bondextra_.md#bondextra)

## Functions

###  bondExtra

▸ **bondExtra**(`args`: [StakingBondExtraArgs](../interfaces/_src_methods_staking_bondextra_.stakingbondextraargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/staking/bondExtra.ts:24](https://github.com/paritytech/txwrapper/blob/7ad8b09/src/methods/staking/bondExtra.ts#L24)*

Add some extra amount that have appeared in the stash `free_balance` into
the balance up for staking.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [StakingBondExtraArgs](../interfaces/_src_methods_staking_bondextra_.stakingbondextraargs.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

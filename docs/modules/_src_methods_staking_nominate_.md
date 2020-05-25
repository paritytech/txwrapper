[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/staking/nominate"](_src_methods_staking_nominate_.md)

# Module: "src/methods/staking/nominate"

## Index

### Interfaces

* [StakingNominateArgs](../interfaces/_src_methods_staking_nominate_.stakingnominateargs.md)

### Functions

* [nominate](_src_methods_staking_nominate_.md#nominate)

## Functions

###  nominate

▸ **nominate**(`args`: [StakingNominateArgs](../interfaces/_src_methods_staking_nominate_.stakingnominateargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/staking/nominate.ts:26](https://github.com/paritytech/txwrapper/blob/7ad8b09/src/methods/staking/nominate.ts#L26)*

Construct a transaction to nominate. This must be called by the _Controller_ account.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [StakingNominateArgs](../interfaces/_src_methods_staking_nominate_.stakingnominateargs.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

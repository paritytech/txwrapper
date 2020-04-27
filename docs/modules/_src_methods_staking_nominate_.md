[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/staking/nominate"](_src_methods_staking_nominate_.md)

# Module: "src/methods/staking/nominate"

## Index

### Interfaces

* [StakingNominateArgs](../interfaces/_src_methods_staking_nominate_.stakingnominateargs.md)

### Functions

* [nominate](_src_methods_staking_nominate_.md#nominate)

## Functions

###  nominate

▸ **nominate**(`args`: [StakingNominateArgs](../interfaces/_src_methods_staking_nominate_.stakingnominateargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options?`: Partial‹[Options](../interfaces/_src_util_options_.options.md)›): *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/staking/nominate.ts:24](https://github.com/paritytech/txwrapper/blob/fc81d5b/src/methods/staking/nominate.ts#L24)*

Construct a transaction to nominate. This must be called by the _Controller_ account.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [StakingNominateArgs](../interfaces/_src_methods_staking_nominate_.stakingnominateargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction.  |
`options?` | Partial‹[Options](../interfaces/_src_util_options_.options.md)› | - |

**Returns:** *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

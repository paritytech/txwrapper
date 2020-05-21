[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/staking/withdrawUnbonded"](_src_methods_staking_withdrawunbonded_.md)

# Module: "src/methods/staking/withdrawUnbonded"

## Index

### Interfaces

* [StakingWithdrawUnbondedArgs](../interfaces/_src_methods_staking_withdrawunbonded_.stakingwithdrawunbondedargs.md)

### Functions

* [withdrawUnbonded](_src_methods_staking_withdrawunbonded_.md#withdrawunbonded)

## Functions

###  withdrawUnbonded

▸ **withdrawUnbonded**(`args`: [StakingWithdrawUnbondedArgs](../interfaces/_src_methods_staking_withdrawunbonded_.stakingwithdrawunbondedargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/staking/withdrawUnbonded.ts:18](https://github.com/paritytech/txwrapper/blob/cf846c2/src/methods/staking/withdrawUnbonded.ts#L18)*

Remove any unlocked chunks from the `unlocking` queue from our management.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [StakingWithdrawUnbondedArgs](../interfaces/_src_methods_staking_withdrawunbonded_.stakingwithdrawunbondedargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction.  |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | - |

**Returns:** *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

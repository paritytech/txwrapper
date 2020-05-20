[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/staking/payoutNominator"](_src_methods_staking_payoutnominator_.md)

# Module: "src/methods/staking/payoutNominator"

## Index

### Interfaces

* [StakingPayoutNominatorArgs](../interfaces/_src_methods_staking_payoutnominator_.stakingpayoutnominatorargs.md)

### Functions

* [payoutNominator](_src_methods_staking_payoutnominator_.md#payoutnominator)

## Functions

###  payoutNominator

▸ **payoutNominator**(`args`: [StakingPayoutNominatorArgs](../interfaces/_src_methods_staking_payoutnominator_.stakingpayoutnominatorargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/staking/payoutNominator.ts:33](https://github.com/paritytech/txwrapper/blob/7569e9a/src/methods/staking/payoutNominator.ts#L33)*

Make one nominator's payout for one era.
WARNING: once an era is payed for a validator such validator can't claim the
payout of previous era.
WARNING: Incorrect arguments here can result in loss of payout. Be very careful.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [StakingPayoutNominatorArgs](../interfaces/_src_methods_staking_payoutnominator_.stakingpayoutnominatorargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction.  |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | - |

**Returns:** *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

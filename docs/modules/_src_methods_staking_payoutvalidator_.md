[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/staking/payoutValidator"](_src_methods_staking_payoutvalidator_.md)

# Module: "src/methods/staking/payoutValidator"

## Index

### Interfaces

* [StakingPayoutValidatorArgs](../interfaces/_src_methods_staking_payoutvalidator_.stakingpayoutvalidatorargs.md)

### Functions

* [payoutValidator](_src_methods_staking_payoutvalidator_.md#payoutvalidator)

## Functions

###  payoutValidator

▸ **payoutValidator**(`args`: [StakingPayoutValidatorArgs](../interfaces/_src_methods_staking_payoutvalidator_.stakingpayoutvalidatorargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/staking/payoutValidator.ts:26](https://github.com/paritytech/txwrapper/blob/7569e9a/src/methods/staking/payoutValidator.ts#L26)*

Make one validator's payout for one era.
WARNING: once an era is payed for a validator such validator can't claim the
payout of previous era.
WARNING: Incorrect arguments here can result in loss of payout. Be very careful.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [StakingPayoutValidatorArgs](../interfaces/_src_methods_staking_payoutvalidator_.stakingpayoutvalidatorargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction.  |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | - |

**Returns:** *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

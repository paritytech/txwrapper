[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["methods/staking/payoutValidator"](_methods_staking_payoutvalidator_.md)

# Module: "methods/staking/payoutValidator"

## Index

### Interfaces

* [StakingPayoutValidatorArgs](../interfaces/_methods_staking_payoutvalidator_.stakingpayoutvalidatorargs.md)

### Functions

* [payoutValidator](_methods_staking_payoutvalidator_.md#payoutvalidator)

## Functions

###  payoutValidator

▸ **payoutValidator**(`args`: [StakingPayoutValidatorArgs](../interfaces/_methods_staking_payoutvalidator_.stakingpayoutvalidatorargs.md), `info`: [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md)): *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/staking/payoutValidator.ts:25](https://github.com/paritytech/txwrapper/blob/fa00a43/src/methods/staking/payoutValidator.ts#L25)*

Make one validator's payout for one era.
WARNING: once an era is payed for a validator such validator can't claim the
payout of previous era.
WARNING: Incorrect arguments here can result in loss of payout. Be very careful.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [StakingPayoutValidatorArgs](../interfaces/_methods_staking_payoutvalidator_.stakingpayoutvalidatorargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

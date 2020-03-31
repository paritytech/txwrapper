[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["methods/staking/payoutNominator"](_methods_staking_payoutnominator_.md)

# Module: "methods/staking/payoutNominator"

## Index

### Interfaces

* [StakingPayoutNominatorArgs](../interfaces/_methods_staking_payoutnominator_.stakingpayoutnominatorargs.md)

### Functions

* [payoutNominator](_methods_staking_payoutnominator_.md#payoutnominator)

## Functions

###  payoutNominator

▸ **payoutNominator**(`args`: [StakingPayoutNominatorArgs](../interfaces/_methods_staking_payoutnominator_.stakingpayoutnominatorargs.md), `info`: [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md)): *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/staking/payoutNominator.ts:32](https://github.com/paritytech/txwrapper/blob/64624af/src/methods/staking/payoutNominator.ts#L32)*

Make one nominator's payout for one era.
WARNING: once an era is payed for a validator such validator can't claim the
payout of previous era.
WARNING: Incorrect arguments here can result in loss of payout. Be very careful.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [StakingPayoutNominatorArgs](../interfaces/_methods_staking_payoutnominator_.stakingpayoutnominatorargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

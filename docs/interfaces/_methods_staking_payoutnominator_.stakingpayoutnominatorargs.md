[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["methods/staking/payoutNominator"](../modules/_methods_staking_payoutnominator_.md) › [StakingPayoutNominatorArgs](_methods_staking_payoutnominator_.stakingpayoutnominatorargs.md)

# Interface: StakingPayoutNominatorArgs

## Hierarchy

* object

  ↳ **StakingPayoutNominatorArgs**

## Index

### Properties

* [era](_methods_staking_payoutnominator_.stakingpayoutnominatorargs.md#era)
* [validators](_methods_staking_payoutnominator_.stakingpayoutnominatorargs.md#validators)

## Properties

###  era

• **era**: *number*

*Defined in [src/methods/staking/payoutNominator.ts:14](https://github.com/paritytech/txwrapper/blob/123d47d/src/methods/staking/payoutNominator.ts#L14)*

May not be lower than one following the most recently paid era. If it is
higher, then it indicates an instruction to skip the payout of all
previous eras.

___

###  validators

• **validators**: *[string, number][]*

*Defined in [src/methods/staking/payoutNominator.ts:21](https://github.com/paritytech/txwrapper/blob/123d47d/src/methods/staking/payoutNominator.ts#L21)*

List of all validators that `who` had exposure to during `era` alongside
the index of the `who` in the clipped exposure of the validator. i.e. each
element is a tuple of `(validator, index of `who` in clipped exposure of
validator)`.

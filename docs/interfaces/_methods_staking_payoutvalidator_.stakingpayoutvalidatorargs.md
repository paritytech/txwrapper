[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["methods/staking/payoutValidator"](../modules/_methods_staking_payoutvalidator_.md) › [StakingPayoutValidatorArgs](_methods_staking_payoutvalidator_.stakingpayoutvalidatorargs.md)

# Interface: StakingPayoutValidatorArgs

## Hierarchy

* object

  ↳ **StakingPayoutValidatorArgs**

## Index

### Properties

* [era](_methods_staking_payoutvalidator_.stakingpayoutvalidatorargs.md#era)

## Properties

###  era

• **era**: *number*

*Defined in [src/methods/staking/payoutValidator.ts:14](https://github.com/paritytech/txwrapper/blob/b8a34ea/src/methods/staking/payoutValidator.ts#L14)*

May not be lower than one following the most recently paid era. If it is
higher, then it indicates an instruction to skip the payout of all
previous eras.

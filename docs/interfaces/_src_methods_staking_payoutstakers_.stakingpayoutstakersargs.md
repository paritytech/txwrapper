[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/staking/payoutStakers"](../modules/_src_methods_staking_payoutstakers_.md) › [StakingPayoutStakersArgs](_src_methods_staking_payoutstakers_.stakingpayoutstakersargs.md)

# Interface: StakingPayoutStakersArgs

## Hierarchy

* object

  ↳ **StakingPayoutStakersArgs**

## Index

### Properties

* [era](_src_methods_staking_payoutstakers_.stakingpayoutstakersargs.md#era)
* [validatorStash](_src_methods_staking_payoutstakers_.stakingpayoutstakersargs.md#validatorstash)

## Properties

###  era

• **era**: *number | string*

*Defined in [src/methods/staking/payoutStakers.ts:18](https://github.com/paritytech/txwrapper/blob/8c6ea2d/src/methods/staking/payoutStakers.ts#L18)*

May be any era between `[current_era - history_depth; current_era]`. Substrate only

___

###  validatorStash

• **validatorStash**: *string*

*Defined in [src/methods/staking/payoutStakers.ts:14](https://github.com/paritytech/txwrapper/blob/8c6ea2d/src/methods/staking/payoutStakers.ts#L14)*

The Stash account of a _validator._ Their nominators, up to, the maximum
`T::MaxNominatorRewardedPerValidator`, will also receive their rewards.

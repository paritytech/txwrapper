[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["methods/staking/nominate"](../modules/_methods_staking_nominate_.md) › [StakingNominateArgs](_methods_staking_nominate_.stakingnominateargs.md)

# Interface: StakingNominateArgs

## Hierarchy

* object

  ↳ **StakingNominateArgs**

## Index

### Properties

* [targets](_methods_staking_nominate_.stakingnominateargs.md#targets)

## Properties

###  targets

• **targets**: *Array‹string›*

*Defined in [src/methods/staking/nominate.ts:15](https://github.com/paritytech/txwrapper/blob/32e6680/src/methods/staking/nominate.ts#L15)*

The SS-58 encoded addresses of the targets you wish to nominate. A maximum of 16
nominations are allowed.

Warning: This provides no checks as to whether these targets are actual validators.

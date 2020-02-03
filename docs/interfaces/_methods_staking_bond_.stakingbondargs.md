[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["methods/staking/bond"](../modules/_methods_staking_bond_.md) › [StakingBondArgs](_methods_staking_bond_.stakingbondargs.md)

# Interface: StakingBondArgs

## Hierarchy

* object

  ↳ **StakingBondArgs**

## Index

### Properties

* [controller](_methods_staking_bond_.stakingbondargs.md#controller)
* [payee](_methods_staking_bond_.stakingbondargs.md#payee)
* [value](_methods_staking_bond_.stakingbondargs.md#value)

## Properties

###  controller

• **controller**: *string*

*Defined in [src/methods/staking/bond.ts:12](https://github.com/paritytech/txwrapper/blob/2967ce5/src/methods/staking/bond.ts#L12)*

The SS-58 encoded address of the Controller account.

___

###  payee

• **payee**: *string*

*Defined in [src/methods/staking/bond.ts:20](https://github.com/paritytech/txwrapper/blob/2967ce5/src/methods/staking/bond.ts#L20)*

The rewards destination. Can be "stash", "staked", or "controller".

___

###  value

• **value**: *number*

*Defined in [src/methods/staking/bond.ts:16](https://github.com/paritytech/txwrapper/blob/2967ce5/src/methods/staking/bond.ts#L16)*

The number of tokens to bond.

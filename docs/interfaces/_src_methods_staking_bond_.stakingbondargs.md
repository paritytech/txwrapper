[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/staking/bond"](../modules/_src_methods_staking_bond_.md) › [StakingBondArgs](_src_methods_staking_bond_.stakingbondargs.md)

# Interface: StakingBondArgs

## Hierarchy

* object

  ↳ **StakingBondArgs**

## Index

### Properties

* [controller](_src_methods_staking_bond_.stakingbondargs.md#controller)
* [payee](_src_methods_staking_bond_.stakingbondargs.md#payee)
* [value](_src_methods_staking_bond_.stakingbondargs.md#value)

## Properties

###  controller

• **controller**: *string*

*Defined in [src/methods/staking/bond.ts:13](https://github.com/paritytech/txwrapper/blob/1ac58f6/src/methods/staking/bond.ts#L13)*

The SS-58 encoded address of the Controller account.

___

###  payee

• **payee**: *string*

*Defined in [src/methods/staking/bond.ts:21](https://github.com/paritytech/txwrapper/blob/1ac58f6/src/methods/staking/bond.ts#L21)*

The rewards destination. Can be "Stash", "Staked", or "Controller".

___

###  value

• **value**: *number*

*Defined in [src/methods/staking/bond.ts:17](https://github.com/paritytech/txwrapper/blob/1ac58f6/src/methods/staking/bond.ts#L17)*

The number of tokens to bond.

[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["methods/staking/bond"](_methods_staking_bond_.md)

# External module: "methods/staking/bond"

## Index

### Interfaces

* [StakingBondArgs](../interfaces/_methods_staking_bond_.stakingbondargs.md)

### Functions

* [bond](_methods_staking_bond_.md#bond)

## Functions

###  bond

▸ **bond**(`args`: [StakingBondArgs](../interfaces/_methods_staking_bond_.stakingbondargs.md), `info`: [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md)): *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/staking/bond.ts:28](https://github.com/paritytech/txwrapper/blob/c530205/src/methods/staking/bond.ts#L28)*

Construct a transaction to bond funds and create a Stash account.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [StakingBondArgs](../interfaces/_methods_staking_bond_.stakingbondargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

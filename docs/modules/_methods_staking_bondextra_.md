[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["methods/staking/bondExtra"](_methods_staking_bondextra_.md)

# External module: "methods/staking/bondExtra"

## Index

### Interfaces

* [StakingBondExtraArgs](../interfaces/_methods_staking_bondextra_.stakingbondextraargs.md)

### Functions

* [bondExtra](_methods_staking_bondextra_.md#bondextra)

## Functions

###  bondExtra

▸ **bondExtra**(`args`: [StakingBondExtraArgs](../interfaces/_methods_staking_bondextra_.stakingbondextraargs.md), `info`: [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md)): *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/staking/bondExtra.ts:21](https://github.com/paritytech/txwrapper/blob/beed255/src/methods/staking/bondExtra.ts#L21)*

Add some extra amount that have appeared in the stash `free_balance` into
the balance up for staking.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [StakingBondExtraArgs](../interfaces/_methods_staking_bondextra_.stakingbondextraargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

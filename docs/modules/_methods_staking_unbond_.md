[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["methods/staking/unbond"](_methods_staking_unbond_.md)

# External module: "methods/staking/unbond"

## Index

### Interfaces

* [StakingUnbondArgs](../interfaces/_methods_staking_unbond_.stakingunbondargs.md)

### Functions

* [unbond](_methods_staking_unbond_.md#unbond)

## Functions

###  unbond

▸ **unbond**(`args`: [StakingUnbondArgs](../interfaces/_methods_staking_unbond_.stakingunbondargs.md), `info`: [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md)): *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/staking/unbond.ts:21](https://github.com/paritytech/txwrapper/blob/c530205/src/methods/staking/unbond.ts#L21)*

Construct a transaction to unbond funds from a Stash account. This must be called
by the _Controller_ account.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [StakingUnbondArgs](../interfaces/_methods_staking_unbond_.stakingunbondargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

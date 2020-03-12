[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["methods/staking/nominate"](_methods_staking_nominate_.md)

# External module: "methods/staking/nominate"

## Index

### Interfaces

* [StakingNominateArgs](../interfaces/_methods_staking_nominate_.stakingnominateargs.md)

### Functions

* [nominate](_methods_staking_nominate_.md#nominate)

## Functions

###  nominate

▸ **nominate**(`args`: [StakingNominateArgs](../interfaces/_methods_staking_nominate_.stakingnominateargs.md), `info`: [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md)): *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/staking/nominate.ts:23](https://github.com/paritytech/txwrapper/blob/ba35923/src/methods/staking/nominate.ts#L23)*

Construct a transaction to nominate. This must be called by the _Controller_ account.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [StakingNominateArgs](../interfaces/_methods_staking_nominate_.stakingnominateargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["methods/staking/setController"](_methods_staking_setcontroller_.md)

# External module: "methods/staking/setController"

## Index

### Interfaces

* [StakingSetControllerArgs](../interfaces/_methods_staking_setcontroller_.stakingsetcontrollerargs.md)

### Functions

* [setController](_methods_staking_setcontroller_.md#setcontroller)

## Functions

###  setController

▸ **setController**(`args`: [StakingSetControllerArgs](../interfaces/_methods_staking_setcontroller_.stakingsetcontrollerargs.md), `info`: [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md)): *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/staking/setController.ts:21](https://github.com/paritytech/txwrapper/blob/4462996/src/methods/staking/setController.ts#L21)*

(Re-)set the controller of a stash. Effects will be felt at the beginning of
the next era.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [StakingSetControllerArgs](../interfaces/_methods_staking_setcontroller_.stakingsetcontrollerargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

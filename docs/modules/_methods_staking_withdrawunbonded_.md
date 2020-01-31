[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["methods/staking/withdrawUnbonded"](_methods_staking_withdrawunbonded_.md)

# External module: "methods/staking/withdrawUnbonded"

## Index

### Functions

* [withdrawUnbonded](_methods_staking_withdrawunbonded_.md#withdrawunbonded)

## Functions

###  withdrawUnbonded

▸ **withdrawUnbonded**(`args`: object, `info`: [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md)): *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/staking/withdrawUnbonded.ts:8](https://github.com/paritytech/txwrapper/blob/660ed27/src/methods/staking/withdrawUnbonded.ts#L8)*

Remove any unlocked chunks from the `unlocking` queue from our management.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | object | - |
`info` | [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

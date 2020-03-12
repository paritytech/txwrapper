[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["methods/staking/validate"](_methods_staking_validate_.md)

# External module: "methods/staking/validate"

## Index

### Interfaces

* [StakingValidateArgs](../interfaces/_methods_staking_validate_.stakingvalidateargs.md)

### Functions

* [validate](_methods_staking_validate_.md#validate)

## Functions

###  validate

▸ **validate**(`args`: [StakingValidateArgs](../interfaces/_methods_staking_validate_.stakingvalidateargs.md), `info`: [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md)): *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/staking/validate.ts:22](https://github.com/paritytech/txwrapper/blob/123d47d/src/methods/staking/validate.ts#L22)*

Declare the desire to validate for the origin controller.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [StakingValidateArgs](../interfaces/_methods_staking_validate_.stakingvalidateargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

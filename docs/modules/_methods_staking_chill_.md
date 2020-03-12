[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["methods/staking/chill"](_methods_staking_chill_.md)

# External module: "methods/staking/chill"

## Index

### Functions

* [chill](_methods_staking_chill_.md#chill)

## Functions

###  chill

▸ **chill**(`args`: object, `info`: [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md)): *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/staking/chill.ts:8](https://github.com/paritytech/txwrapper/blob/c530205/src/methods/staking/chill.ts#L8)*

Declare the desire to cease validating or nominating. Does not unbond funds.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | object | - |
`info` | [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

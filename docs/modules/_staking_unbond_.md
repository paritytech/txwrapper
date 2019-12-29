[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["staking/unbond"](_staking_unbond_.md)

# External module: "staking/unbond"

## Index

### Functions

* [unbond](_staking_unbond_.md#unbond)

## Functions

###  unbond

▸ **unbond**(`info`: [TxInfoUnbond](../interfaces/_staking_stakingtxtypeutils_.txinfounbond.md)): *[UnsignedTransaction](../interfaces/_util_interfaces_.unsignedtransaction.md)*

*Defined in [src/staking/unbond.ts:14](https://github.com/paritytech/txwrapper/blob/0fb6503/src/staking/unbond.ts#L14)*

Construct a transaction to unbond funds from a Stash account. This must be called
by the _Controller_ account.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`info` | [TxInfoUnbond](../interfaces/_staking_stakingtxtypeutils_.txinfounbond.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_interfaces_.unsignedtransaction.md)*

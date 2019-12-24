[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["staking/unbond"](_staking_unbond_.md)

# External module: "staking/unbond"

## Index

### Interfaces

* [UnsignedUnbondTransaction](../interfaces/_staking_unbond_.unsignedunbondtransaction.md)

### Functions

* [unbond](_staking_unbond_.md#unbond)

## Functions

###  unbond

▸ **unbond**(`info`: [TxInfoUnbond](../interfaces/_staking_stakingtxtypeutils_.txinfounbond.md)): *[UnsignedUnbondTransaction](../interfaces/_staking_unbond_.unsignedunbondtransaction.md)*

*Defined in [src/staking/unbond.ts:25](https://github.com/paritytech/txwrapper/blob/29e727e/src/staking/unbond.ts#L25)*

Construct a transaction to unbond funds from a Stash account. This must be called
by the _Controller_ account.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`info` | [TxInfoUnbond](../interfaces/_staking_stakingtxtypeutils_.txinfounbond.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedUnbondTransaction](../interfaces/_staking_unbond_.unsignedunbondtransaction.md)*

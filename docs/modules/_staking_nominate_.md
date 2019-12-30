[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["staking/nominate"](_staking_nominate_.md)

# External module: "staking/nominate"

## Index

### Functions

* [nominate](_staking_nominate_.md#nominate)

## Functions

###  nominate

▸ **nominate**(`info`: [TxInfoNominate](../interfaces/_staking_stakingtxtypeutils_.txinfonominate.md)): *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

*Defined in [src/staking/nominate.ts:13](https://github.com/paritytech/txwrapper/blob/74e5037/src/staking/nominate.ts#L13)*

Construct a transaction to nominate. This must be called by the _Controller_ account.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`info` | [TxInfoNominate](../interfaces/_staking_stakingtxtypeutils_.txinfonominate.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

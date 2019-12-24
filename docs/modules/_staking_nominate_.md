[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["staking/nominate"](_staking_nominate_.md)

# External module: "staking/nominate"

## Index

### Interfaces

* [UnsignedNominateTransaction](../interfaces/_staking_nominate_.unsignednominatetransaction.md)

### Functions

* [nominate](_staking_nominate_.md#nominate)

## Functions

###  nominate

▸ **nominate**(`info`: [TxInfoNominate](../interfaces/_staking_stakingtxtypeutils_.txinfonominate.md)): *[UnsignedNominateTransaction](../interfaces/_staking_nominate_.unsignednominatetransaction.md)*

*Defined in [src/staking/nominate.ts:24](https://github.com/paritytech/txwrapper/blob/29e727e/src/staking/nominate.ts#L24)*

Construct a transaction to nominate. This must be called by the _Controller_ account.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`info` | [TxInfoNominate](../interfaces/_staking_stakingtxtypeutils_.txinfonominate.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedNominateTransaction](../interfaces/_staking_nominate_.unsignednominatetransaction.md)*

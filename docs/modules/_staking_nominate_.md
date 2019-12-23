[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["staking/nominate"](_staking_nominate_.md)

# External module: "staking/nominate"

## Index

### Interfaces

* [TxInfoNominate](../interfaces/_staking_nominate_.txinfonominate.md)
* [UnsignedNominateTransaction](../interfaces/_staking_nominate_.unsignednominatetransaction.md)

### Functions

* [nominate](_staking_nominate_.md#nominate)

## Functions

###  nominate

▸ **nominate**(`info`: [TxInfoNominate](../interfaces/_staking_nominate_.txinfo.md)): *[UnsignedNominateTransaction](../interfaces/_staking_nominate_.unsignednominatetransaction.md)*

<!-- TODO: update with commit once made -->
*Defined in [src/staking/nominate.ts:78](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/91a53f7/src/staking/nominate.ts#L78)*

Construct a transaction to nominate. This must be called by the _Controller_ account.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`info` | [TxInfoNominate](../interfaces/_staking_nominate_.txinfonominate.md) | Information required to construct the transaction. |

**Returns:** *[UnsignedNominateTransaction](../interfaces/_staking_nominate_.unsignednominatetransaction.md)*

[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["staking/bond"](_staking_bond_.md)

# External module: "staking/bond"

## Index

### Interfaces

* [UnsignedBondTransaction](../interfaces/_staking_bond_.unsignedbondtransaction.md)

### Functions

* [bond](_staking_bond_.md#bond)

## Functions

###  bond

▸ **bond**(`info`: [TxInfoBond](../interfaces/_staking_stakingtxtypeutils_.txinfobond.md)): *[UnsignedBondTransaction](../interfaces/_staking_bond_.unsignedbondtransaction.md)*

*Defined in [src/staking/bond.ts:24](https://github.com/paritytech/txwrapper/blob/29e727e/src/staking/bond.ts#L24)*

Construct a transaction to bond funds and create a Stash account.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`info` | [TxInfoBond](../interfaces/_staking_stakingtxtypeutils_.txinfobond.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedBondTransaction](../interfaces/_staking_bond_.unsignedbondtransaction.md)*

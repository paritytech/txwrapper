[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["staking/bond"](_staking_bond_.md)

# External module: "staking/bond"

## Index

### Interfaces

* [TxInfoBond](../interfaces/_staking_bond_.txinfobond.md)
* [UnsignedBondTransaction](../interfaces/_staking_bond_.unsignedbondtransaction.md)

### Functions

* [bond](_staking_bond_.md#bond)

## Functions

###  bond

▸ **bond**(`info`: [TxInfoBond](../interfaces/_staking_bond_.txinfo.md)): *[UnsignedBondTransaction](../interfaces/_staking_bond_.unsignedbondtransaction.md)*

<!-- TODO: update with commit once made -->
*Defined in [src/staking/bond.ts:78](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/91a53f7/src/staking/bond.ts#L78)*

Construct a transaction to bond funds and create a Stash account.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`info` | [TxInfoBond](../interfaces/_staking_bond_.txinfobond.md) | Information required to construct the transaction. |

**Returns:** *[UnsignedBondTransaction](../interfaces/_staking_bond_.unsignedbondtransaction.md)*

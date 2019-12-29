[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["staking/bond"](_staking_bond_.md)

# External module: "staking/bond"

## Index

### Functions

* [bond](_staking_bond_.md#bond)

## Functions

###  bond

▸ **bond**(`info`: [TxInfoBond](../interfaces/_staking_stakingtxtypeutils_.txinfobond.md)): *[UnsignedTransaction](../interfaces/_util_interfaces_.unsignedtransaction.md)*

*Defined in [src/staking/bond.ts:13](https://github.com/paritytech/txwrapper/blob/0fb6503/src/staking/bond.ts#L13)*

Construct a transaction to bond funds and create a Stash account.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`info` | [TxInfoBond](../interfaces/_staking_stakingtxtypeutils_.txinfobond.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_interfaces_.unsignedtransaction.md)*

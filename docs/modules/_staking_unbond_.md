[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["staking/unbond"](_staking_unbond_.md)

# External module: "staking/unbond"

## Index

### Interfaces

* [TxInfoUnbond](../interfaces/_staking_unbond_.txinfounbond.md)
* [UnsignedUnbondTransaction](../interfaces/_staking_unbond_.unsignedunbondtransaction.md)

### Functions

* [unbond](_staking_unbond_.md#unbond)

## Functions

###  unbond

▸ **unbond**(`info`: [TxInfoUnbond](../interfaces/_staking_unbond_.txinfo.md)): *[UnsignedUnbondTransaction](../interfaces/_staking_unbond_.unsignedunbondtransaction.md)*

<!-- TODO: update with commit once made -->
*Defined in [src/staking/unbond.ts:78](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/91a53f7/src/staking/unbond.ts#L78)*

Construct a transaction to unbond funds from a Stash account. This must be called by the 
_Controller_ account.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`info` | [TxInfoUnbond](../interfaces/_staking_unbond_.txinfounbond.md) | Information required to construct the transaction. |

**Returns:** *[UnsignedUnbondTransaction](../interfaces/_staking_unbond_.unsignedunbondtransaction.md)*

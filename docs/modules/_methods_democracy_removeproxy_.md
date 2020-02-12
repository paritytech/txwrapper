[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["methods/democracy/removeProxy"](_methods_democracy_removeproxy_.md)

# External module: "methods/democracy/removeProxy"

## Index

### Interfaces

* [DemocracyRemoveProxyArgs](../interfaces/_methods_democracy_removeproxy_.democracyremoveproxyargs.md)

### Functions

* [removeProxy](_methods_democracy_removeproxy_.md#removeproxy)

## Functions

###  removeProxy

▸ **removeProxy**(`args`: [DemocracyRemoveProxyArgs](../interfaces/_methods_democracy_removeproxy_.democracyremoveproxyargs.md), `info`: [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md)): *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/democracy/removeProxy.ts:20](https://github.com/paritytech/txwrapper/blob/57a1bc2/src/methods/democracy/removeProxy.ts#L20)*

Clear the proxy. Called by the stash.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [DemocracyRemoveProxyArgs](../interfaces/_methods_democracy_removeproxy_.democracyremoveproxyargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

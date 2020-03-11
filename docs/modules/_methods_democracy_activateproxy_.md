[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["methods/democracy/activateProxy"](_methods_democracy_activateproxy_.md)

# External module: "methods/democracy/activateProxy"

## Index

### Interfaces

* [DemocracyActivateProxyArgs](../interfaces/_methods_democracy_activateproxy_.democracyactivateproxyargs.md)

### Functions

* [activateProxy](_methods_democracy_activateproxy_.md#activateproxy)

## Functions

###  activateProxy

▸ **activateProxy**(`args`: [DemocracyActivateProxyArgs](../interfaces/_methods_democracy_activateproxy_.democracyactivateproxyargs.md), `info`: [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md)): *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/democracy/activateProxy.ts:20](https://github.com/paritytech/txwrapper/blob/4462996/src/methods/democracy/activateProxy.ts#L20)*

Specify a proxy that is already open to us. Called by the stash.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [DemocracyActivateProxyArgs](../interfaces/_methods_democracy_activateproxy_.democracyactivateproxyargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

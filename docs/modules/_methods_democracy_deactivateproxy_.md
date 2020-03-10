[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["methods/democracy/deactivateProxy"](_methods_democracy_deactivateproxy_.md)

# External module: "methods/democracy/deactivateProxy"

## Index

### Interfaces

* [DemocracyDeactivateProxyArgs](../interfaces/_methods_democracy_deactivateproxy_.democracydeactivateproxyargs.md)

### Functions

* [deactivateProxy](_methods_democracy_deactivateproxy_.md#deactivateproxy)

## Functions

###  deactivateProxy

▸ **deactivateProxy**(`args`: [DemocracyDeactivateProxyArgs](../interfaces/_methods_democracy_deactivateproxy_.democracydeactivateproxyargs.md), `info`: [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md)): *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/democracy/deactivateProxy.ts:20](https://github.com/paritytech/txwrapper/blob/79435da/src/methods/democracy/deactivateProxy.ts#L20)*

Clear the proxy. Called by the stash.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [DemocracyDeactivateProxyArgs](../interfaces/_methods_democracy_deactivateproxy_.democracydeactivateproxyargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

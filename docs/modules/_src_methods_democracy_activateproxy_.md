[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/democracy/activateProxy"](_src_methods_democracy_activateproxy_.md)

# Module: "src/methods/democracy/activateProxy"

## Index

### Interfaces

* [DemocracyActivateProxyArgs](../interfaces/_src_methods_democracy_activateproxy_.democracyactivateproxyargs.md)

### Functions

* [activateProxy](_src_methods_democracy_activateproxy_.md#activateproxy)

## Functions

###  activateProxy

▸ **activateProxy**(`args`: [DemocracyActivateProxyArgs](../interfaces/_src_methods_democracy_activateproxy_.democracyactivateproxyargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options?`: Partial‹[Options](../interfaces/_src_util_options_.options.md)›): *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/democracy/activateProxy.ts:21](https://github.com/paritytech/txwrapper/blob/fc81d5b/src/methods/democracy/activateProxy.ts#L21)*

Specify a proxy that is already open to us. Called by the stash.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [DemocracyActivateProxyArgs](../interfaces/_src_methods_democracy_activateproxy_.democracyactivateproxyargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction.  |
`options?` | Partial‹[Options](../interfaces/_src_util_options_.options.md)› | - |

**Returns:** *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

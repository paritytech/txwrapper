[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/democracy/deactivateProxy"](_src_methods_democracy_deactivateproxy_.md)

# Module: "src/methods/democracy/deactivateProxy"

## Index

### Interfaces

* [DemocracyDeactivateProxyArgs](../interfaces/_src_methods_democracy_deactivateproxy_.democracydeactivateproxyargs.md)

### Functions

* [deactivateProxy](_src_methods_democracy_deactivateproxy_.md#deactivateproxy)

## Functions

###  deactivateProxy

▸ **deactivateProxy**(`args`: [DemocracyDeactivateProxyArgs](../interfaces/_src_methods_democracy_deactivateproxy_.democracydeactivateproxyargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/democracy/deactivateProxy.ts:24](https://github.com/paritytech/txwrapper/blob/9a03411/src/methods/democracy/deactivateProxy.ts#L24)*

Deactivate the proxy, but leave open to this account. Called by the stash.
The proxy must already be active.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [DemocracyDeactivateProxyArgs](../interfaces/_src_methods_democracy_deactivateproxy_.democracydeactivateproxyargs.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

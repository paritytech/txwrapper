[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["methods/democracy/openProxy"](_methods_democracy_openproxy_.md)

# Module: "methods/democracy/openProxy"

## Index

### Interfaces

* [DemocracyOpenProxyArgs](../interfaces/_methods_democracy_openproxy_.democracyopenproxyargs.md)

### Functions

* [openProxy](_methods_democracy_openproxy_.md#openproxy)

## Functions

###  openProxy

▸ **openProxy**(`args`: [DemocracyOpenProxyArgs](../interfaces/_methods_democracy_openproxy_.democracyopenproxyargs.md), `info`: [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md)): *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/democracy/openProxy.ts:20](https://github.com/paritytech/txwrapper/blob/fa00a43/src/methods/democracy/openProxy.ts#L20)*

Become a proxy. This must be called prior to a later `activateProxy`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [DemocracyOpenProxyArgs](../interfaces/_methods_democracy_openproxy_.democracyopenproxyargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

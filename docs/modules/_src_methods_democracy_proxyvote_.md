[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/democracy/proxyVote"](_src_methods_democracy_proxyvote_.md)

# Module: "src/methods/democracy/proxyVote"

## Index

### Interfaces

* [DemocracyProxyVoteArgs](../interfaces/_src_methods_democracy_proxyvote_.democracyproxyvoteargs.md)

### Functions

* [proxyVote](_src_methods_democracy_proxyvote_.md#proxyvote)

## Functions

###  proxyVote

▸ **proxyVote**(`args`: [DemocracyProxyVoteArgs](../interfaces/_src_methods_democracy_proxyvote_.democracyproxyvoteargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options?`: Partial‹[Options](../interfaces/_src_util_options_.options.md)›): *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/democracy/proxyVote.ts:26](https://github.com/paritytech/txwrapper/blob/d1bfb8b/src/methods/democracy/proxyVote.ts#L26)*

Vote in a referendum on behalf of a stash.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [DemocracyProxyVoteArgs](../interfaces/_src_methods_democracy_proxyvote_.democracyproxyvoteargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction.  |
`options?` | Partial‹[Options](../interfaces/_src_util_options_.options.md)› | - |

**Returns:** *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

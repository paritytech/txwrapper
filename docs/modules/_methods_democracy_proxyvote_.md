[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["methods/democracy/proxyVote"](_methods_democracy_proxyvote_.md)

# External module: "methods/democracy/proxyVote"

## Index

### Interfaces

* [DemocracyProxyVoteArgs](../interfaces/_methods_democracy_proxyvote_.democracyproxyvoteargs.md)

### Functions

* [proxyVote](_methods_democracy_proxyvote_.md#proxyvote)

## Functions

###  proxyVote

▸ **proxyVote**(`args`: [DemocracyProxyVoteArgs](../interfaces/_methods_democracy_proxyvote_.democracyproxyvoteargs.md), `info`: [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md)): *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/democracy/proxyVote.ts:26](https://github.com/paritytech/txwrapper/blob/32e6680/src/methods/democracy/proxyVote.ts#L26)*

Vote in a referendum on behalf of a stash.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [DemocracyProxyVoteArgs](../interfaces/_methods_democracy_proxyvote_.democracyproxyvoteargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

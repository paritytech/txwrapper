[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["methods/democracy/vote"](_methods_democracy_vote_.md)

# External module: "methods/democracy/vote"

## Index

### Interfaces

* [DemocracyVoteArgs](../interfaces/_methods_democracy_vote_.democracyvoteargs.md)

### Functions

* [vote](_methods_democracy_vote_.md#vote)

## Functions

###  vote

▸ **vote**(`args`: [DemocracyVoteArgs](../interfaces/_methods_democracy_vote_.democracyvoteargs.md), `info`: [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md)): *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/democracy/vote.ts:26](https://github.com/paritytech/txwrapper/blob/32e6680/src/methods/democracy/vote.ts#L26)*

Vote in a referendum.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [DemocracyVoteArgs](../interfaces/_methods_democracy_vote_.democracyvoteargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

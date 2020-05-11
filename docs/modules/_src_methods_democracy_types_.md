[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/democracy/types"](_src_methods_democracy_types_.md)

# Module: "src/methods/democracy/types"

## Index

### Type aliases

* [AccountVote](_src_methods_democracy_types_.md#accountvote)
* [Vote](_src_methods_democracy_types_.md#vote)

## Type aliases

###  AccountVote

Ƭ **AccountVote**: *object | object*

*Defined in [src/methods/democracy/types.ts:26](https://github.com/paritytech/txwrapper/blob/9698841/src/methods/democracy/types.ts#L26)*

A vote in a referendum. Can be one of:
- Standard: A standard vote, one-way (approve or reject) with a given amount
of conviction.
- Split: A split vote with balances given for both ways, and with no
conviction, useful for parachains when voting.

___

###  Vote

Ƭ **Vote**: *object*

*Defined in [src/methods/democracy/types.ts:7](https://github.com/paritytech/txwrapper/blob/9698841/src/methods/democracy/types.ts#L7)*

A vote in a referendum

#### Type declaration:

* **aye**: *boolean*

* **conviction**: *ArrayElementType‹typeof AllConvictions›*

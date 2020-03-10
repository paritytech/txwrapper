[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["util/registry"](_util_registry_.md)

# External module: "util/registry"

## Index

### Functions

* [getRegistry](_util_registry_.md#getregistry)

## Functions

###  getRegistry

▸ **getRegistry**(`specName`: "kusama", `specVersion`: number): *TypeRegistry*

*Defined in [src/util/registry.ts:13](https://github.com/paritytech/txwrapper/blob/a7b5a55/src/util/registry.ts#L13)*

Create a specific TypeRegistry for a current chain. The reason we have this
is, depending on different runtime versions, we have different types (e.g.:
session keys went from 4 to 5 keys). Here we hardcode which runtime
version's types we wish to use.

**`see`** https://github.com/polkadot-js/api/blob/master/packages/types/src/known/overrides.ts

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`specName` | "kusama" | "kusama" |
`specVersion` | number | 1042 |

**Returns:** *TypeRegistry*

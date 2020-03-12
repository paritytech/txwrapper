[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["util/options"](_util_options_.md)

# External module: "util/options"

## Index

### Interfaces

* [Options](../interfaces/_util_options_.options.md)

### Functions

* [getRegistry](_util_options_.md#getregistry)
* [sanitizeOptions](_util_options_.md#sanitizeoptions)

### Object literals

* [defaultOptions](_util_options_.md#const-defaultoptions)

## Functions

###  getRegistry

▸ **getRegistry**(`specName`: "kusama", `specVersion`: number): *TypeRegistry*

*Defined in [src/util/options.ts:15](https://github.com/paritytech/txwrapper/blob/ba35923/src/util/options.ts#L15)*

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

___

###  sanitizeOptions

▸ **sanitizeOptions**(`metadataOrOptions`: string | [Options](../interfaces/_util_options_.options.md), `ss58Format`: number): *Required‹[Options](../interfaces/_util_options_.options.md)›*

*Defined in [src/util/options.ts:67](https://github.com/paritytech/txwrapper/blob/ba35923/src/util/options.ts#L67)*

Sanitize the options that the user pass in. In particular, the second
argument can either be a string (the metadata) or an Options object.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`metadataOrOptions` | string &#124; [Options](../interfaces/_util_options_.options.md) | - | - |
`ss58Format` | number | KUSAMA_SS58_FORMAT |   |

**Returns:** *Required‹[Options](../interfaces/_util_options_.options.md)›*

## Object literals

### `Const` defaultOptions

### ▪ **defaultOptions**: *object*

*Defined in [src/util/options.ts:55](https://github.com/paritytech/txwrapper/blob/ba35923/src/util/options.ts#L55)*

###  ss58Format

• **ss58Format**: *number* = KUSAMA_SS58_FORMAT

*Defined in [src/util/options.ts:56](https://github.com/paritytech/txwrapper/blob/ba35923/src/util/options.ts#L56)*

###  typeRegistry

• **typeRegistry**: *TypeRegistry‹›* = getRegistry()

*Defined in [src/util/options.ts:57](https://github.com/paritytech/txwrapper/blob/ba35923/src/util/options.ts#L57)*

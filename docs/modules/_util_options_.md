[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["util/options"](_util_options_.md)

# Module: "util/options"

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

▸ **getRegistry**(`chain`: "Kusama" | "Polkadot" | "Westend", `specName`: "kusama" | "polkadot" | "westend", `specVersion`: number): *TypeRegistry*

*Defined in [src/util/options.ts:17](https://github.com/paritytech/txwrapper/blob/9438594/src/util/options.ts#L17)*

Create a specific TypeRegistry for a current chain. The reason we have this
is, depending on different runtime versions, we have different types (e.g.:
session keys went from 4 to 5 keys). Here we hardcode which runtime
version's types we wish to use.

**`see`** https://github.com/polkadot-js/api/blob/master/packages/types/src/known/overrides.ts

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`chain` | "Kusama" &#124; "Polkadot" &#124; "Westend" | - | - |
`specName` | "kusama" &#124; "polkadot" &#124; "westend" | - | The chain to create the type registry for. |
`specVersion` | number | 9999 | The spec version of that chain for which we want to create a type registry.  |

**Returns:** *TypeRegistry*

___

###  sanitizeOptions

▸ **sanitizeOptions**(`metadataOrOptions`: string | [Options](../interfaces/_util_options_.options.md), `ss58Format`: number): *Required‹[Options](../interfaces/_util_options_.options.md)›*

*Defined in [src/util/options.ts:69](https://github.com/paritytech/txwrapper/blob/9438594/src/util/options.ts#L69)*

Sanitize the options that the user pass in. In particular, the second
argument can either be a string (the metadata) or an Options object. Also
apply defaults for SS58 prefix and registry to Kusama.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`metadataOrOptions` | string &#124; [Options](../interfaces/_util_options_.options.md) | - | - |
`ss58Format` | number | KUSAMA_SS58_FORMAT |   |

**Returns:** *Required‹[Options](../interfaces/_util_options_.options.md)›*

## Object literals

### `Const` defaultOptions

### ▪ **defaultOptions**: *object*

*Defined in [src/util/options.ts:56](https://github.com/paritytech/txwrapper/blob/9438594/src/util/options.ts#L56)*

###  ss58Format

• **ss58Format**: *number* = KUSAMA_SS58_FORMAT

*Defined in [src/util/options.ts:57](https://github.com/paritytech/txwrapper/blob/9438594/src/util/options.ts#L57)*

###  typeRegistry

• **typeRegistry**: *TypeRegistry‹›* = getRegistry('Kusama', 'kusama')

*Defined in [src/util/options.ts:58](https://github.com/paritytech/txwrapper/blob/9438594/src/util/options.ts#L58)*

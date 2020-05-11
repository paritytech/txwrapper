[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/util/options"](_src_util_options_.md)

# Module: "src/util/options"

## Index

### Interfaces

* [Options](../interfaces/_src_util_options_.options.md)

### Functions

* [sanitizeOptions](_src_util_options_.md#sanitizeoptions)

## Functions

###  sanitizeOptions

▸ **sanitizeOptions**(`metadataOrOptions`: string | [Options](../interfaces/_src_util_options_.options.md), `ss58Format`: number): *Required‹[Options](../interfaces/_src_util_options_.options.md)›*

*Defined in [src/util/options.ts:34](https://github.com/paritytech/txwrapper/blob/9698841/src/util/options.ts#L34)*

Sanitize the options that the user pass in. In particular, the second
argument can either be a string (the metadata) or an Options object. Also
apply defaults for SS58 prefix and registry to Kusama.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`metadataOrOptions` | string &#124; [Options](../interfaces/_src_util_options_.options.md) | - | - |
`ss58Format` | number | KUSAMA_SS58_FORMAT |   |

**Returns:** *Required‹[Options](../interfaces/_src_util_options_.options.md)›*

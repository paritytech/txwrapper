[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/util/types"](../modules/_src_util_types_.md) › [OptionsWithMeta](_src_util_types_.optionswithmeta.md)

# Interface: OptionsWithMeta

Runtime-specific options for encoding/decoding transactions. Pass these
options to functions that require registry and metadata.

## Hierarchy

* [Options](_src_util_types_.options.md)

  ↳ **OptionsWithMeta**

## Index

### Properties

* [metadataRpc](_src_util_types_.optionswithmeta.md#metadatarpc)
* [registry](_src_util_types_.optionswithmeta.md#registry)

## Properties

###  metadataRpc

• **metadataRpc**: *string*

*Defined in [src/util/types.ts:90](https://github.com/paritytech/txwrapper/blob/2ba8a31/src/util/types.ts#L90)*

The metadata of the runtime.

___

###  registry

• **registry**: *TypeRegistry*

*Inherited from [Options](_src_util_types_.options.md).[registry](_src_util_types_.options.md#registry)*

*Defined in [src/util/types.ts:79](https://github.com/paritytech/txwrapper/blob/2ba8a31/src/util/types.ts#L79)*

The type registry of the runtime.

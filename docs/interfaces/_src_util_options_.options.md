[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/util/options"](../modules/_src_util_options_.md) › [Options](_src_util_options_.options.md)

# Interface: Options

Runtime-specific options for encoding and decoding transactions.

## Hierarchy

* **Options**

## Index

### Properties

* [metadata](_src_util_options_.options.md#metadata)
* [registry](_src_util_options_.options.md#optional-registry)
* [ss58Format](_src_util_options_.options.md#optional-ss58format)

## Properties

###  metadata

• **metadata**: *string*

*Defined in [src/util/options.ts:13](https://github.com/paritytech/txwrapper/blob/c52e67f/src/util/options.ts#L13)*

The metadata of the runtime.

___

### `Optional` registry

• **registry**? : *TypeRegistry*

*Defined in [src/util/options.ts:17](https://github.com/paritytech/txwrapper/blob/c52e67f/src/util/options.ts#L17)*

The type registry of the runtime. Defaults to Kusama's type registry

___

### `Optional` ss58Format

• **ss58Format**? : *undefined | number*

*Defined in [src/util/options.ts:23](https://github.com/paritytech/txwrapper/blob/c52e67f/src/util/options.ts#L23)*

**`deprecated`** Please use `registry.setChainProperties()` instead, and pass the correct SS58 prefix in the chain properties.

The SS58 prefix of the chain. Defaults to 2 (Kusama).

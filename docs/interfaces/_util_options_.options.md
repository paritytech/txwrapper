[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["util/options"](../modules/_util_options_.md) › [Options](_util_options_.options.md)

# Interface: Options

Runtime-specific options for encoding and decoding transactions.

## Hierarchy

* **Options**

## Index

### Properties

* [metadata](_util_options_.options.md#metadata)
* [registry](_util_options_.options.md#optional-registry)
* [ss58Format](_util_options_.options.md#optional-ss58format)

## Properties

###  metadata

• **metadata**: *string*

*Defined in [src/util/options.ts:45](https://github.com/paritytech/txwrapper/blob/9438594/src/util/options.ts#L45)*

The metadata of the runtime.

___

### `Optional` registry

• **registry**? : *TypeRegistry*

*Defined in [src/util/options.ts:49](https://github.com/paritytech/txwrapper/blob/9438594/src/util/options.ts#L49)*

The type registry of the runtime. Defaults to Kusama's type registry

___

### `Optional` ss58Format

• **ss58Format**? : *undefined | number*

*Defined in [src/util/options.ts:53](https://github.com/paritytech/txwrapper/blob/9438594/src/util/options.ts#L53)*

The SS58 prefix of the chain. Defaults to 2 (Kusama).

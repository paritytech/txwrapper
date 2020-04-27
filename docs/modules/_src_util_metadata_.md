[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/util/metadata"](_src_util_metadata_.md)

# Module: "src/util/metadata"

## Index

### Variables

* [createMetadata](_src_util_metadata_.md#const-createmetadata)

### Functions

* [createDecorated](_src_util_metadata_.md#createdecorated)
* [createMetadataUnmemoized](_src_util_metadata_.md#createmetadataunmemoized)
* [getRegistry](_src_util_metadata_.md#getregistry)

## Variables

### `Const` createMetadata

• **createMetadata**: *[createMetadataUnmemoized](_src_util_metadata_.md#createmetadataunmemoized) & Memoized‹[createMetadataUnmemoized](_src_util_metadata_.md#createmetadataunmemoized)›* = memoizee(createMetadataUnmemoized, {
  length: 2,
})

*Defined in [src/util/metadata.ts:45](https://github.com/paritytech/txwrapper/blob/fc81d5b/src/util/metadata.ts#L45)*

## Functions

###  createDecorated

▸ **createDecorated**(`registry`: TypeRegistry, `metadata`: string): *Decorated*

*Defined in [src/util/metadata.ts:56](https://github.com/paritytech/txwrapper/blob/fc81d5b/src/util/metadata.ts#L56)*

From a metadata hex string (for example returned by RPC), create a Decorated
object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`registry` | TypeRegistry | The registry of the metadata. |
`metadata` | string | The metadata as hex string.  |

**Returns:** *Decorated*

___

###  createMetadataUnmemoized

▸ **createMetadataUnmemoized**(`registry`: TypeRegistry, `metadata`: string): *Metadata*

*Defined in [src/util/metadata.ts:38](https://github.com/paritytech/txwrapper/blob/fc81d5b/src/util/metadata.ts#L38)*

From a metadata hex string (for example returned by RPC), create a Metadata
object. Metadata decoding is expensive, so this function is memoized.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`registry` | TypeRegistry | The registry of the metadata. |
`metadata` | string | The metadata as hex string.  |

**Returns:** *Metadata*

___

###  getRegistry

▸ **getRegistry**(`chainName`: "Kusama" | "Polkadot" | "Westend", `specName`: "kusama" | "polkadot" | "westend", `specVersion`: number): *TypeRegistry*

*Defined in [src/util/metadata.ts:17](https://github.com/paritytech/txwrapper/blob/fc81d5b/src/util/metadata.ts#L17)*

Create a specific TypeRegistry for the current chain. The reason we have
this is, depending on different runtime versions, we have different types
(e.g.: session keys went from 4 to 5 keys). Here we hardcode which runtime
version's types we wish to use.

**`see`** https://github.com/polkadot-js/api/tree/master/packages/types-known

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`chainName` | "Kusama" &#124; "Polkadot" &#124; "Westend" | - | - |
`specName` | "kusama" &#124; "polkadot" &#124; "westend" | - | The chain to create the type registry for. |
`specVersion` | number | 9999 | The spec version of that chain for which we want to create a type registry.  |

**Returns:** *TypeRegistry*

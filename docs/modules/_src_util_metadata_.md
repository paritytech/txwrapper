[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/util/metadata"](_src_util_metadata_.md)

# Module: "src/util/metadata"

## Index

### Interfaces

* [ChainProperties](../interfaces/_src_util_metadata_.chainproperties.md)

### Functions

* [createMetadataUnmemoized](_src_util_metadata_.md#createmetadataunmemoized)
* [getRegistry](_src_util_metadata_.md#getregistry)

### Object literals

* [defaultChainProperties](_src_util_metadata_.md#const-defaultchainproperties)

## Functions

###  createMetadataUnmemoized

▸ **createMetadataUnmemoized**(`registry`: TypeRegistry, `metadata`: string): *Metadata*

*Defined in [src/util/metadata.ts:77](https://github.com/paritytech/txwrapper/blob/c52e67f/src/util/metadata.ts#L77)*

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

*Defined in [src/util/metadata.ts:54](https://github.com/paritytech/txwrapper/blob/c52e67f/src/util/metadata.ts#L54)*

Given a chain name and a spec version, return the corresponding type
registry.

**`see`** https://github.com/polkadot-js/api/tree/master/packages/types-known

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chainName` | "Kusama" &#124; "Polkadot" &#124; "Westend" | The chain to create the type registry for. |
`specName` | "kusama" &#124; "polkadot" &#124; "westend" | The name of the runtime spec. |
`specVersion` | number | The spec version of that chain for which we want to create a type registry.  |

**Returns:** *TypeRegistry*

## Object literals

### `Const` defaultChainProperties

### ▪ **defaultChainProperties**: *object*

*Defined in [src/util/metadata.ts:26](https://github.com/paritytech/txwrapper/blob/c52e67f/src/util/metadata.ts#L26)*

Hardcode some chain properties of known chains. These are normally returned
by `system_properties` call, but since they don't change much, it's pretty
safe to hardcode them.

▪ **Kusama**: *object*

*Defined in [src/util/metadata.ts:27](https://github.com/paritytech/txwrapper/blob/c52e67f/src/util/metadata.ts#L27)*

* **ss58Format**: *number* = KUSAMA_SS58_FORMAT

* **tokenDecimals**: *number* = 12

* **tokenSymbol**: *string* = "KSM"

▪ **Polkadot**: *object*

*Defined in [src/util/metadata.ts:32](https://github.com/paritytech/txwrapper/blob/c52e67f/src/util/metadata.ts#L32)*

* **ss58Format**: *number* = POLKADOT_SS58_FORMAT

* **tokenDecimals**: *number* = 12

* **tokenSymbol**: *string* = "DOT"

▪ **Westend**: *object*

*Defined in [src/util/metadata.ts:37](https://github.com/paritytech/txwrapper/blob/c52e67f/src/util/metadata.ts#L37)*

* **ss58Format**: *number* = WESTEND_SS58_FORMAT

* **tokenDecimals**: *number* = 12

* **tokenSymbol**: *string* = "WND"

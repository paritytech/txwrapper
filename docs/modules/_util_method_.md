[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["util/method"](_util_method_.md)

# External module: "util/method"

## Index

### Interfaces

* [Method](../interfaces/_util_method_.method.md)
* [TxInfo](../interfaces/_util_method_.txinfo.md)

### Type aliases

* [Args](_util_method_.md#args)

### Functions

* [createMethod](_util_method_.md#createmethod)
* [serializeMethod](_util_method_.md#serializemethod)

## Type aliases

###  Args

Ƭ **Args**: *Record‹string, AnyJson›*

*Defined in [src/util/method.ts:9](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/8d67f3d/src/util/method.ts#L9)*

## Functions

###  createMethod

▸ **createMethod**(`info`: [TxInfo](../interfaces/_util_method_.txinfo.md)): *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

*Defined in [src/util/method.ts:31](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/8d67f3d/src/util/method.ts#L31)*

Helper function to construct an offline method. This function is used in all
method in the `methods/` folder.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`info` | [TxInfo](../interfaces/_util_method_.txinfo.md) | All info necessary to construct a method. That includes base tx info, as well as method name & arguments.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

___

###  serializeMethod

▸ **serializeMethod**(`registry`: TypeRegistry, `method`: Call): *[Method](../interfaces/_util_method_.method.md)*

*Defined in [src/util/method.ts:74](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/8d67f3d/src/util/method.ts#L74)*

From a PolkadotJs `Call` type, get a serialized object representing the call

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`registry` | TypeRegistry | The type registry |
`method` | Call | The method to serialize  |

**Returns:** *[Method](../interfaces/_util_method_.method.md)*

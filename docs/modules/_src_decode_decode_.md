[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/decode/decode"](_src_decode_decode_.md)

# Module: "src/decode/decode"

## Index

### Functions

* [decode](_src_decode_decode_.md#decode)

## Functions

###  decode

▸ **decode**(`unsignedTx`: [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md), `options`: [Options](../interfaces/_src_util_options_.options.md)): *DecodedUnsignedTx*

*Defined in [src/decode/decode.ts:15](https://github.com/paritytech/txwrapper/blob/9698841/src/decode/decode.ts#L15)*

Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`unsignedTx` | [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md) | The data to parse, as an unsigned tx. |
`options` | [Options](../interfaces/_src_util_options_.options.md) | Runtime-specific data used for decoding the transaction.  |

**Returns:** *DecodedUnsignedTx*

▸ **decode**(`unsignedTx`: [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md), `metadataRpc`: string, `ss58Format?`: undefined | number): *DecodedUnsignedTx*

*Defined in [src/decode/decode.ts:29](https://github.com/paritytech/txwrapper/blob/9698841/src/decode/decode.ts#L29)*

Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.

**`deprecated`** Prefer passing an `options` object as second argument.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`unsignedTx` | [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md) | The data to parse, as an unsigned tx. |
`metadataRpc` | string | The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC call `state_getMetadata`. |
`ss58Format?` | undefined &#124; number | The SS-58 address encoding to return.  |

**Returns:** *DecodedUnsignedTx*

▸ **decode**(`signedTx`: string, `options`: [Options](../interfaces/_src_util_options_.options.md)): *DecodedSignedTx*

*Defined in [src/decode/decode.ts:41](https://github.com/paritytech/txwrapper/blob/9698841/src/decode/decode.ts#L41)*

Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`signedTx` | string | The data to parse, as a signed tx hex string. |
`options` | [Options](../interfaces/_src_util_options_.options.md) | Runtime-specific data used for decoding the transaction.  |

**Returns:** *DecodedSignedTx*

▸ **decode**(`signedTx`: string, `metadataRpc`: string, `ss58Format?`: undefined | number): *DecodedSignedTx*

*Defined in [src/decode/decode.ts:52](https://github.com/paritytech/txwrapper/blob/9698841/src/decode/decode.ts#L52)*

Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.

**`deprecated`** Prefer passing an `options` object as second argument.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`signedTx` | string | The data to parse, as a signed tx hex string. |
`metadataRpc` | string | The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC call `state_getMetadata`. |
`ss58Format?` | undefined &#124; number | The SS-58 address encoding to return.  |

**Returns:** *DecodedSignedTx*

▸ **decode**(`signingPayload`: string, `options`: [Options](../interfaces/_src_util_options_.options.md)): *DecodedSigningPayload*

*Defined in [src/decode/decode.ts:64](https://github.com/paritytech/txwrapper/blob/9698841/src/decode/decode.ts#L64)*

Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`signingPayload` | string | The data to parse, as a signing payload hex string. |
`options` | [Options](../interfaces/_src_util_options_.options.md) | Runtime-specific data used for decoding the transaction.  |

**Returns:** *DecodedSigningPayload*

▸ **decode**(`signingPayload`: string, `metadataRpc`: string, `ss58Format?`: undefined | number): *DecodedSigningPayload*

*Defined in [src/decode/decode.ts:78](https://github.com/paritytech/txwrapper/blob/9698841/src/decode/decode.ts#L78)*

Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.

**`deprecated`** Prefer passing an `options` object as second argument.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`signingPayload` | string | The data to parse, as a signing payload hex string. |
`metadataRpc` | string | The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC call `state_getMetadata`. |
`ss58Format?` | undefined &#124; number | The SS-58 address encoding to return.  |

**Returns:** *DecodedSigningPayload*

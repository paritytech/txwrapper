[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/decode/decode"](_src_decode_decode_.md)

# Module: "src/decode/decode"

## Index

### Functions

* [decode](_src_decode_decode_.md#decode)

## Functions

###  decode

▸ **decode**(`unsignedTx`: [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): *DecodedUnsignedTx*

*Defined in [src/decode/decode.ts:15](https://github.com/paritytech/txwrapper/blob/ccdcd52/src/decode/decode.ts#L15)*

Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`unsignedTx` | [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md) | The data to parse, as an unsigned tx. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Runtime-specific data used for decoding the transaction.  |

**Returns:** *DecodedUnsignedTx*

▸ **decode**(`signedTx`: string, `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): *DecodedSignedTx*

*Defined in [src/decode/decode.ts:26](https://github.com/paritytech/txwrapper/blob/ccdcd52/src/decode/decode.ts#L26)*

Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`signedTx` | string | The data to parse, as a signed tx hex string. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Runtime-specific data used for decoding the transaction.  |

**Returns:** *DecodedSignedTx*

▸ **decode**(`signingPayload`: string, `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): *DecodedSigningPayload*

*Defined in [src/decode/decode.ts:37](https://github.com/paritytech/txwrapper/blob/ccdcd52/src/decode/decode.ts#L37)*

Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`signingPayload` | string | The data to parse, as a signing payload hex string. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Runtime-specific data used for decoding the transaction.  |

**Returns:** *DecodedSigningPayload*

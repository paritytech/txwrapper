[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["decode/decode"](_decode_decode_.md)

# External module: "decode/decode"

## Index

### Functions

* [decode](_decode_decode_.md#decode)

## Functions

###  decode

▸ **decode**(`unsignedTx`: [UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md), `metadataRpc`: string, `ss58Format`: number): *DecodedUnsignedTx*

*Defined in [src/decode/decode.ts:17](https://github.com/paritytech/txwrapper/blob/74e5037/src/decode/decode.ts#L17)*

Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`unsignedTx` | [UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md) | The data to parse, as an unsigned tx. |
`metadataRpc` | string | The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC call `state_getMetadata`. |
`ss58Format` | number | The SS-58 address encoding to return.  |

**Returns:** *DecodedUnsignedTx*

▸ **decode**(`signedTx`: string, `metadataRpc`: string, `ss58Format`: number): *DecodedSignedTx*

*Defined in [src/decode/decode.ts:31](https://github.com/paritytech/txwrapper/blob/74e5037/src/decode/decode.ts#L31)*

Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`signedTx` | string | The data to parse, as a signed tx hex string. |
`metadataRpc` | string | The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC call `state_getMetadata`. |
`ss58Format` | number | The SS-58 address encoding to return.  |

**Returns:** *DecodedSignedTx*

▸ **decode**(`signingPayload`: string, `metadataRpc`: string, `ss58Format`: number): *DecodedSigningPayload*

*Defined in [src/decode/decode.ts:45](https://github.com/paritytech/txwrapper/blob/74e5037/src/decode/decode.ts#L45)*

Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`signingPayload` | string | The data to parse, as a signing payload hex string. |
`metadataRpc` | string | The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC call `state_getMetadata`. |
`ss58Format` | number | The SS-58 address encoding to return.  |

**Returns:** *DecodedSigningPayload*

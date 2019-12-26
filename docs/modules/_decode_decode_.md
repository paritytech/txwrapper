[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["decode/decode"](_decode_decode_.md)

# External module: "decode/decode"

## Index

### Functions

* [decode](_decode_decode_.md#decode)

## Functions

###  decode

▸ **decode**(`unsignedTx`: [UnsignedTransaction](../interfaces/_util_interfaces_.unsignedtransaction.md), `metadataRpc`: string): *[TxInfo](../interfaces/_balancetransfer_.txinfo.md)*

*Defined in [src/decode/decode.ts:17](https://github.com/paritytech/txwrapper/blob/ef34f88/src/decode/decode.ts#L17)*

Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`unsignedTx` | [UnsignedTransaction](../interfaces/_util_interfaces_.unsignedtransaction.md) | The data to parse, as an unsigned tx. |
`metadataRpc` | string | The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC call `state_getMetadata`.  |

**Returns:** *[TxInfo](../interfaces/_balancetransfer_.txinfo.md)*

▸ **decode**(`signedTx`: string, `metadataRpc`: string): *DecodedSignedTx*

*Defined in [src/decode/decode.ts:28](https://github.com/paritytech/txwrapper/blob/ef34f88/src/decode/decode.ts#L28)*

Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`signedTx` | string | The data to parse, as a signed tx hex string. |
`metadataRpc` | string | The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC call `state_getMetadata`.  |

**Returns:** *DecodedSignedTx*

▸ **decode**(`signingPayload`: string, `metadataRpc`: string): *DecodedSigningPayload*

*Defined in [src/decode/decode.ts:36](https://github.com/paritytech/txwrapper/blob/ef34f88/src/decode/decode.ts#L36)*

Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`signingPayload` | string | The data to parse, as a signing payload hex string. |
`metadataRpc` | string | The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC call `state_getMetadata`.  |

**Returns:** *DecodedSigningPayload*

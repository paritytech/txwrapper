[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["decode/decode"](_decode_decode_.md)

# External module: "decode/decode"

## Index

### Functions

* [decode](_decode_decode_.md#decode)

## Functions

###  decode

▸ **decode**(`data`: string, `metadataRpc`: string): *[DecodedSignedTx](_decode_decodesignedtx_.md#decodedsignedtx) | [DecodedSigningPayload](../interfaces/_decode_decodesigningpayload_.decodedsigningpayload.md)*

*Defined in [src/decode/decode.ts:14](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/d55e27d/src/decode/decode.ts#L14)*

Parse the transaction information from a signing payload OR from a signed tx

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | string | The data to parse, should be a signing payload or a signed tx |
`metadataRpc` | string | The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC call `state_getMetadata`  |

**Returns:** *[DecodedSignedTx](_decode_decodesignedtx_.md#decodedsignedtx) | [DecodedSigningPayload](../interfaces/_decode_decodesigningpayload_.decodedsigningpayload.md)*

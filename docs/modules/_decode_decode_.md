[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["decode/decode"](_decode_decode_.md)

# External module: "decode/decode"

## Index

### Functions

* [decode](_decode_decode_.md#decode)

## Functions

###  decode

▸ **decode**(`data`: string | [UnsignedTransaction](../interfaces/_balancetransfer_.unsignedtransaction.md), `metadataRpc`: string): *[DecodedSignedTx](_decode_decodesignedtx_.md#decodedsignedtx) | [DecodedSigningPayload](_decode_decodesigningpayload_.md#decodedsigningpayload)*

*Defined in [src/decode/decode.ts:17](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/e82c558/src/decode/decode.ts#L17)*

Parse the transaction information from a signing payload, an unsigned tx or
a signed tx

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | string &#124; [UnsignedTransaction](../interfaces/_balancetransfer_.unsignedtransaction.md) | The data to parse, should be a signing payload or a signed tx |
`metadataRpc` | string | The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC call `state_getMetadata`  |

**Returns:** *[DecodedSignedTx](_decode_decodesignedtx_.md#decodedsignedtx) | [DecodedSigningPayload](_decode_decodesigningpayload_.md#decodedsigningpayload)*

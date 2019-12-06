[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["decode/decodeSigningPayload"](_decode_decodesigningpayload_.md)

# External module: "decode/decodeSigningPayload"

## Index

### Type aliases

* [DecodedSigningPayload](_decode_decodesigningpayload_.md#decodedsigningpayload)

### Functions

* [decodeSigningPayload](_decode_decodesigningpayload_.md#decodesigningpayload)

## Type aliases

###  DecodedSigningPayload

Ƭ **DecodedSigningPayload**: *Omit‹[TxInfo](../interfaces/_balancetransfer_.txinfo.md), "address" | "blockNumber"›*

*Defined in [src/decode/decodeSigningPayload.ts:12](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/8a10176/src/decode/decodeSigningPayload.ts#L12)*

## Functions

###  decodeSigningPayload

▸ **decodeSigningPayload**(`signingPayload`: string, `metadataRpc`: string): *[DecodedSigningPayload](_decode_decodesigningpayload_.md#decodedsigningpayload)*

*Defined in [src/decode/decodeSigningPayload.ts:21](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/8a10176/src/decode/decodeSigningPayload.ts#L21)*

Parse the transaction information from a signing payload

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`signingPayload` | string | The signing payload, in hex |
`metadataRpc` | string | The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC call `state_getMetadata`  |

**Returns:** *[DecodedSigningPayload](_decode_decodesigningpayload_.md#decodedsigningpayload)*

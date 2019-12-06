[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["decode/decodeSigningPayload"](_decode_decodesigningpayload_.md)

# External module: "decode/decodeSigningPayload"

## Index

### Interfaces

* [DecodedSigningPayload](../interfaces/_decode_decodesigningpayload_.decodedsigningpayload.md)

### Functions

* [decodeSigningPayload](_decode_decodesigningpayload_.md#decodesigningpayload)

## Functions

###  decodeSigningPayload

▸ **decodeSigningPayload**(`signingPayload`: string, `metadataRpc`: string): *[DecodedSigningPayload](../interfaces/_decode_decodesigningpayload_.decodedsigningpayload.md)*

*Defined in [src/decode/decodeSigningPayload.ts:25](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/d55e27d/src/decode/decodeSigningPayload.ts#L25)*

Parse the transaction information from a signing payload

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`signingPayload` | string | The signing payload, in hex |
`metadataRpc` | string | The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC call `state_getMetadata`  |

**Returns:** *[DecodedSigningPayload](../interfaces/_decode_decodesigningpayload_.decodedsigningpayload.md)*

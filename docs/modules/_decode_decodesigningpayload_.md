[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["decode/decodeSigningPayload"](_decode_decodesigningpayload_.md)

# External module: "decode/decodeSigningPayload"

## Index

### Functions

* [decodeSigningPayload](_decode_decodesigningpayload_.md#decodesigningpayload)

## Functions

###  decodeSigningPayload

▸ **decodeSigningPayload**(`signingPayload`: string, `metadataRpc`: string): *Partial‹[TxInfo](../interfaces/_balancetransfer_.txinfo.md)›*

*Defined in [src/decode/decodeSigningPayload.ts:19](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/a95c050/src/decode/decodeSigningPayload.ts#L19)*

Parse the transaction information from a signing payload

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`signingPayload` | string | The signing payload, in hex |
`metadataRpc` | string | The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC call `state_getMetadata`  |

**Returns:** *Partial‹[TxInfo](../interfaces/_balancetransfer_.txinfo.md)›*

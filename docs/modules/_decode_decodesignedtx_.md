[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["decode/decodeSignedTx"](_decode_decodesignedtx_.md)

# External module: "decode/decodeSignedTx"

## Index

### Type aliases

* [DecodedSignedTx](_decode_decodesignedtx_.md#decodedsignedtx)

### Functions

* [decodeSignedTx](_decode_decodesignedtx_.md#decodesignedtx)

## Type aliases

###  DecodedSignedTx

Ƭ **DecodedSignedTx**: *Omit‹[TxInfo](../interfaces/_balancetransfer_.txinfo.md), "blockHash" | "blockNumber" | "genesisHash" | "specVersion" | "version"›*

*Defined in [src/decode/decodeSignedTx.ts:9](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/e82c558/src/decode/decodeSignedTx.ts#L9)*

## Functions

###  decodeSignedTx

▸ **decodeSignedTx**(`signedTx`: string, `metadataRpc`: string): *[DecodedSignedTx](_decode_decodesignedtx_.md#decodedsignedtx)*

*Defined in [src/decode/decodeSignedTx.ts:21](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/e82c558/src/decode/decodeSignedTx.ts#L21)*

Parse the transaction information from a signed transaction offline

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`signedTx` | string | - |
`metadataRpc` | string | The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC call `state_getMetadata`  |

**Returns:** *[DecodedSignedTx](_decode_decodesignedtx_.md#decodedsignedtx)*

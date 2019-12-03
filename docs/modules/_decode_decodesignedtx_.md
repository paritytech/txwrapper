[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["decode/decodeSignedTx"](_decode_decodesignedtx_.md)

# External module: "decode/decodeSignedTx"

## Index

### Functions

* [decodeSignedTx](_decode_decodesignedtx_.md#decodesignedtx)

## Functions

###  decodeSignedTx

▸ **decodeSignedTx**(`signedTx`: string, `metadataRpc`: string): *Partial‹[TxInfo](../interfaces/_balancetransfer_.txinfo.md)›*

*Defined in [src/decode/decodeSignedTx.ts:16](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/a95c050/src/decode/decodeSignedTx.ts#L16)*

Parse the transaction information from a signed transaction offline

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`signedTx` | string | - |
`metadataRpc` | string | The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC call `state_getMetadata`  |

**Returns:** *Partial‹[TxInfo](../interfaces/_balancetransfer_.txinfo.md)›*

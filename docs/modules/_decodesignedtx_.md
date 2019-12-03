[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["decodeSignedTx"](_decodesignedtx_.md)

# External module: "decodeSignedTx"

## Index

### Functions

* [decodeSignedTx](_decodesignedtx_.md#decodesignedtx)

## Functions

###  decodeSignedTx

▸ **decodeSignedTx**(`signedTx`: string, `metadataRpc`: string): *Partial‹[TxInfo](../interfaces/_balancetransfer_.txinfo.md)›*

*Defined in [src/decodeSignedTx.ts:17](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/23f3f82/src/decodeSignedTx.ts#L17)*

Parse the transaction information from a signed transaction
offline

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`signedTx` | string | - |
`metadataRpc` | string | The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC call `state_getMetadata`  |

**Returns:** *Partial‹[TxInfo](../interfaces/_balancetransfer_.txinfo.md)›*

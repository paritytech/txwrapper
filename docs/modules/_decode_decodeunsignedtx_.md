[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["decode/decodeUnsignedTx"](_decode_decodeunsignedtx_.md)

# External module: "decode/decodeUnsignedTx"

## Index

### Functions

* [decodeUnsignedTx](_decode_decodeunsignedtx_.md#decodeunsignedtx)

## Functions

###  decodeUnsignedTx

▸ **decodeUnsignedTx**(`unsigned`: [UnsignedTransaction](../interfaces/_balancetransfer_.unsignedtransaction.md), `metadataRpc`: string): *[TxInfo](../interfaces/_balancetransfer_.txinfo.md)*

*Defined in [src/decode/decodeUnsignedTx.ts:15](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/8a10176/src/decode/decodeUnsignedTx.ts#L15)*

Parse the transaction information from an unigned transaction offline

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`unsigned` | [UnsignedTransaction](../interfaces/_balancetransfer_.unsignedtransaction.md) | The JSON representing the unsigned transaction |
`metadataRpc` | string | The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC call `state_getMetadata`  |

**Returns:** *[TxInfo](../interfaces/_balancetransfer_.txinfo.md)*

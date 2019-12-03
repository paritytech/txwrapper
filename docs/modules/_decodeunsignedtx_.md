[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["decodeUnsignedTx"](_decodeunsignedtx_.md)

# External module: "decodeUnsignedTx"

## Index

### Functions

* [decodeUnsignedTx](_decodeunsignedtx_.md#decodeunsignedtx)

## Functions

###  decodeUnsignedTx

▸ **decodeUnsignedTx**(`unsigned`: [UnsignedTransaction](../interfaces/_balancetransfer_.unsignedtransaction.md), `metadataRpc`: string): *[TxInfo](../interfaces/_balancetransfer_.txinfo.md)*

*Defined in [src/decodeUnsignedTx.ts:16](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/23f3f82/src/decodeUnsignedTx.ts#L16)*

Parse the transaction information from a signed transaction
offline

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`unsigned` | [UnsignedTransaction](../interfaces/_balancetransfer_.unsignedtransaction.md) | The JSON representing the unsigned transaction |
`metadataRpc` | string | The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC call `state_getMetadata`  |

**Returns:** *[TxInfo](../interfaces/_balancetransfer_.txinfo.md)*

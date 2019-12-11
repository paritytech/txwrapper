[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["decode/decode"](_decode_decode_.md)

# External module: "decode/decode"

## Index

### Functions

* [decode](_decode_decode_.md#decode)

## Functions

###  decode

▸ **decode**(`unsignedTx`: [UnsignedTransaction](../interfaces/_balancetransfer_.unsignedtransaction.md), `metadataRpc`: string): *[TxInfo](../interfaces/_balancetransfer_.txinfo.md)*

*Defined in [src/decode/decode.ts:12](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/446bc11/src/decode/decode.ts#L12)*

Parse the transaction information from an unsigned tx or a signed tx

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`unsignedTx` | [UnsignedTransaction](../interfaces/_balancetransfer_.unsignedtransaction.md) | The data to parse, as an unsigned tx |
`metadataRpc` | string | The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC call `state_getMetadata`  |

**Returns:** *[TxInfo](../interfaces/_balancetransfer_.txinfo.md)*

▸ **decode**(`signedTx`: string, `metadataRpc`: string): *DecodedSignedTx*

*Defined in [src/decode/decode.ts:23](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/446bc11/src/decode/decode.ts#L23)*

Parse the transaction information from an unsigned tx or a signed tx

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`signedTx` | string | The data to parse, as a signed tx hex string |
`metadataRpc` | string | The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC call `state_getMetadata`  |

**Returns:** *DecodedSignedTx*

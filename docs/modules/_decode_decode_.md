[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["decode/decode"](_decode_decode_.md)

# External module: "decode/decode"

## Index

### Functions

* [decode](_decode_decode_.md#decode)

## Functions

###  decode

▸ **decode**(`unsigned`: [UnsignedTransaction](../interfaces/_balancetransfer_.unsignedtransaction.md), `metadataRpc`: string): *[TxInfo](../interfaces/_balancetransfer_.txinfo.md)*

*Defined in [src/decode/decode.ts:18](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/b63db16/src/decode/decode.ts#L18)*

Parse the transaction information from a signing payload, an unsigned tx or
a signed tx

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`unsigned` | [UnsignedTransaction](../interfaces/_balancetransfer_.unsignedtransaction.md) | - |
`metadataRpc` | string | The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC call `state_getMetadata`  |

**Returns:** *[TxInfo](../interfaces/_balancetransfer_.txinfo.md)*

▸ **decode**(`data`: string, `metadataRpc`: string): *DecodedSignedTx | DecodedSigningPayload*

*Defined in [src/decode/decode.ts:22](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/b63db16/src/decode/decode.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | string |
`metadataRpc` | string |

**Returns:** *DecodedSignedTx | DecodedSigningPayload*

[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["createSignedTx"](_createsignedtx_.md)

# External module: "createSignedTx"

## Index

### Functions

* [createSignedTx](_createsignedtx_.md#createsignedtx)

## Functions

###  createSignedTx

▸ **createSignedTx**(`unsigned`: [UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md), `signature`: string): *string*

*Defined in [src/createSignedTx.ts:14](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/ffb9177/src/createSignedTx.ts#L14)*

Serialize a signed transaction in a format that can be submitted over the
Node RPC Interface from the signing payload and signature produced by the
remote signer.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`unsigned` | [UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md) | The JSON representing the unsigned transaction. |
`signature` | string | Signature of the signing payload produced by the remote signer.  |

**Returns:** *string*

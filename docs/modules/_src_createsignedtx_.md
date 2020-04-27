[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/createSignedTx"](_src_createsignedtx_.md)

# Module: "src/createSignedTx"

## Index

### Functions

* [createSignedTx](_src_createsignedtx_.md#createsignedtx)

## Functions

###  createSignedTx

▸ **createSignedTx**(`unsigned`: [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md), `signature`: string, `options?`: Partial‹[Options](../interfaces/_src_util_options_.options.md)›): *string*

*Defined in [src/createSignedTx.ts:17](https://github.com/paritytech/txwrapper/blob/38b3ce8/src/createSignedTx.ts#L17)*

Serialize a signed transaction in a format that can be submitted over the
Node RPC Interface from the signing payload and signature produced by the
remote signer.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`unsigned` | [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md) | The JSON representing the unsigned transaction. |
`signature` | string | Signature of the signing payload produced by the remote signer.  |
`options?` | Partial‹[Options](../interfaces/_src_util_options_.options.md)› | - |

**Returns:** *string*

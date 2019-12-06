[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["createSignedTx"](_createsignedtx_.md)

# External module: "createSignedTx"

## Index

### Functions

* [createSignedTx](_createsignedtx_.md#createsignedtx)

## Functions

###  createSignedTx

▸ **createSignedTx**(`address`: string, `signingPayload`: string, `signature`: string, `metadataRpc`: string): *string*

*Defined in [src/createSignedTx.ts:15](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/d55e27d/src/createSignedTx.ts#L15)*

Serialize a signed transaction in a format that can be submitted over the
Node RPC Interface from the signing payload and signature produced by the
remote signer

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`address` | string | - |
`signingPayload` | string | - |
`signature` | string | Signature of the signing payload produced by the remote signer  |
`metadataRpc` | string | - |

**Returns:** *string*

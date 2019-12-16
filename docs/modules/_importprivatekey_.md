[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["importPrivateKey"](_importprivatekey_.md)

# External module: "importPrivateKey"

## Index

### Interfaces

* [KeyringPair](../interfaces/_importprivatekey_.keyringpair.md)

### Functions

* [importPrivateKey](_importprivatekey_.md#importprivatekey)

## Functions

###  importPrivateKey

▸ **importPrivateKey**(`privateKey`: string | Uint8Array, `ss58Format`: number): *[KeyringPair](../interfaces/_importprivatekey_.keyringpair.md)*

Defined in src/importPrivateKey.ts:17

Import a private key and create a KeyringPair

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`privateKey` | string &#124; Uint8Array | The private key of the key pair.  |
`ss58Format` | number | The [SS58 prefix](https://github.com/paritytech/substrate/wiki/External-Address-Format-(SS58)) with which to encode the address. Default is Kusama.  |

**Returns:** *[KeyringPair](../interfaces/_importprivatekey_.keyringpair.md)*

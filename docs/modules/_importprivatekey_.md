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

*Defined in [src/importPrivateKey.ts:18](https://github.com/paritytech/txwrapper/blob/ef34f88/src/importPrivateKey.ts#L18)*

Import a private key and create a KeyringPair.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`privateKey` | string &#124; Uint8Array | - | The private key of the key pair. |
`ss58Format` | number |  KUSAMA_SS58_FORMAT | The SS58 encoding of the address.  |

**Returns:** *[KeyringPair](../interfaces/_importprivatekey_.keyringpair.md)*

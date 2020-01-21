[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["deriveAddress"](_deriveaddress_.md)

# External module: "deriveAddress"

## Index

### Functions

* [deriveAddress](_deriveaddress_.md#deriveaddress)

## Functions

###  deriveAddress

▸ **deriveAddress**(`publicKey`: string | Uint8Array, `ss58Format`: number): *string*

*Defined in [src/deriveAddress.ts:11](https://github.com/paritytech/txwrapper/blob/0023326/src/deriveAddress.ts#L11)*

Derive an address from a cryptographic public key offline.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`publicKey` | string &#124; Uint8Array | - | The public key to derive from |
`ss58Format` | number |  KUSAMA_SS58_FORMAT | The SS58 format to use  |

**Returns:** *string*

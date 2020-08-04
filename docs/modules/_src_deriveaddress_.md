[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/deriveAddress"](_src_deriveaddress_.md)

# Module: "src/deriveAddress"

## Index

### Functions

* [deriveAddress](_src_deriveaddress_.md#deriveaddress)

## Functions

###  deriveAddress

▸ **deriveAddress**(`publicKey`: string | Uint8Array, `ss58Format`: number): *string*

*Defined in [src/deriveAddress.ts:9](https://github.com/paritytech/txwrapper/blob/2e195b6/src/deriveAddress.ts#L9)*

Derive an address from a cryptographic public key offline.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`publicKey` | string &#124; Uint8Array | The public key to derive from. |
`ss58Format` | number | The SS58 format to use.  |

**Returns:** *string*

[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["createSigningPayload"](_createsigningpayload_.md)

# External module: "createSigningPayload"

## Index

### Functions

* [createSigningPayload](_createsigningpayload_.md#createsigningpayload)

## Functions

###  createSigningPayload

▸ **createSigningPayload**(`unsigned`: [UnsignedTransaction](../interfaces/_balancetransfer_.unsignedtransaction.md)): *string*

*Defined in [src/createSigningPayload.ts:11](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/d55e27d/src/createSigningPayload.ts#L11)*

Construct the signing payload from an unsigned transaction and export it to
a remote signer (this is often called "detached signing")

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`unsigned` | [UnsignedTransaction](../interfaces/_balancetransfer_.unsignedtransaction.md) | The JSON representing the unsigned transaction  |

**Returns:** *string*

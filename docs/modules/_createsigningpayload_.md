[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["createSigningPayload"](_createsigningpayload_.md)

# External module: "createSigningPayload"

## Index

### Functions

* [createSigningPayload](_createsigningpayload_.md#createsigningpayload)

## Functions

###  createSigningPayload

▸ **createSigningPayload**(`unsigned`: [UnsignedTransaction](_balancetransfer_.md#unsignedtransaction)): *string*

*Defined in [createSigningPayload.ts:11](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/07b7ece/src/createSigningPayload.ts#L11)*

Construct the signing payload from an unsigned transaction and export it to
a remote signer (this is often called "detached signing")

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`unsigned` | [UnsignedTransaction](_balancetransfer_.md#unsignedtransaction) | The JSON representing the unsigned transaction  |

**Returns:** *string*

[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["createSigningPayload"](_createsigningpayload_.md)

# Module: "createSigningPayload"

## Index

### Functions

* [createSigningPayload](_createsigningpayload_.md#createsigningpayload)

## Functions

###  createSigningPayload

▸ **createSigningPayload**(`unsigned`: [UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md), `options?`: Partial‹[Options](../interfaces/_util_options_.options.md)›): *string*

*Defined in [src/createSigningPayload.ts:11](https://github.com/paritytech/txwrapper/blob/1b54171/src/createSigningPayload.ts#L11)*

Construct the signing payload from an unsigned transaction and export it to
a remote signer (this is often called "detached signing").

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`unsigned` | [UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md) | The JSON representing the unsigned transaction.  |
`options?` | Partial‹[Options](../interfaces/_util_options_.options.md)› | - |

**Returns:** *string*

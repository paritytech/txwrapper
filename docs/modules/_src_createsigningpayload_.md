[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/createSigningPayload"](_src_createsigningpayload_.md)

# Module: "src/createSigningPayload"

## Index

### Functions

* [createSigningPayload](_src_createsigningpayload_.md#createsigningpayload)

## Functions

###  createSigningPayload

▸ **createSigningPayload**(`unsigned`: [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md), `options`: [Options](../interfaces/_src_util_types_.options.md)): *string*

*Defined in [src/createSigningPayload.ts:9](https://github.com/paritytech/txwrapper/blob/9a03411/src/createSigningPayload.ts#L9)*

Construct the signing payload from an unsigned transaction and export it to
a remote signer (this is often called "detached signing").

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`unsigned` | [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md) | The JSON representing the unsigned transaction.  |
`options` | [Options](../interfaces/_src_util_types_.options.md) | - |

**Returns:** *string*

[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["methods/session/setKeys"](_methods_session_setkeys_.md)

# External module: "methods/session/setKeys"

## Index

### Interfaces

* [SessionSetKeysArgs](../interfaces/_methods_session_setkeys_.sessionsetkeysargs.md)

### Functions

* [setKeys](_methods_session_setkeys_.md#setkeys)

## Functions

###  setKeys

▸ **setKeys**(`args`: [SessionSetKeysArgs](../interfaces/_methods_session_setkeys_.sessionsetkeysargs.md), `info`: [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md)): *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/session/setKeys.ts:24](https://github.com/paritytech/txwrapper/blob/2ef02a5/src/methods/session/setKeys.ts#L24)*

Sets the session key(s) of the function caller to `key`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [SessionSetKeysArgs](../interfaces/_methods_session_setkeys_.sessionsetkeysargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

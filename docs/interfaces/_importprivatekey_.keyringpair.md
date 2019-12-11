[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["importPrivateKey"](../modules/_importprivatekey_.md) › [KeyringPair](_importprivatekey_.keyringpair.md)

# Interface: KeyringPair

A keyring pair

## Hierarchy

* KeyringPair

  ↳ **KeyringPair**

## Index

### Properties

* [address](_importprivatekey_.keyringpair.md#address)
* [decodePkcs8](_importprivatekey_.keyringpair.md#decodepkcs8)
* [derive](_importprivatekey_.keyringpair.md#derive)
* [encodePkcs8](_importprivatekey_.keyringpair.md#encodepkcs8)
* [isLocked](_importprivatekey_.keyringpair.md#islocked)
* [lock](_importprivatekey_.keyringpair.md#lock)
* [meta](_importprivatekey_.keyringpair.md#meta)
* [publicKey](_importprivatekey_.keyringpair.md#publickey)
* [setMeta](_importprivatekey_.keyringpair.md#setmeta)
* [type](_importprivatekey_.keyringpair.md#type)

### Methods

* [sign](_importprivatekey_.keyringpair.md#sign)
* [toJson](_importprivatekey_.keyringpair.md#tojson)
* [verify](_importprivatekey_.keyringpair.md#verify)

## Properties

###  address

• **address**: *string*

*Inherited from void*

Defined in node_modules/@polkadot/keyring/types.d.ts:27

___

###  decodePkcs8

• **decodePkcs8**: *function*

*Inherited from void*

Defined in node_modules/@polkadot/keyring/types.d.ts:32

#### Type declaration:

▸ (`passphrase?`: undefined | string, `encoded?`: Uint8Array): *void*

**Parameters:**

Name | Type |
------ | ------ |
`passphrase?` | undefined &#124; string |
`encoded?` | Uint8Array |

___

###  derive

• **derive**: *function*

*Inherited from void*

Defined in node_modules/@polkadot/keyring/types.d.ts:33

#### Type declaration:

▸ (`suri`: string, `meta?`: KeyringPair$Meta): *KeyringPair*

**Parameters:**

Name | Type |
------ | ------ |
`suri` | string |
`meta?` | KeyringPair$Meta |

___

###  encodePkcs8

• **encodePkcs8**: *function*

*Inherited from void*

Defined in node_modules/@polkadot/keyring/types.d.ts:34

#### Type declaration:

▸ (`passphrase?`: undefined | string): *Uint8Array*

**Parameters:**

Name | Type |
------ | ------ |
`passphrase?` | undefined &#124; string |

___

###  isLocked

• **isLocked**: *boolean*

*Inherited from void*

Defined in node_modules/@polkadot/keyring/types.d.ts:29

___

###  lock

• **lock**: *function*

*Inherited from void*

Defined in node_modules/@polkadot/keyring/types.d.ts:35

#### Type declaration:

▸ (): *void*

___

###  meta

• **meta**: *KeyringPair$Meta*

*Inherited from void*

Defined in node_modules/@polkadot/keyring/types.d.ts:28

___

###  publicKey

• **publicKey**: *Uint8Array*

*Inherited from void*

Defined in node_modules/@polkadot/keyring/types.d.ts:30

___

###  setMeta

• **setMeta**: *function*

*Inherited from void*

Defined in node_modules/@polkadot/keyring/types.d.ts:36

#### Type declaration:

▸ (`meta`: KeyringPair$Meta): *void*

**Parameters:**

Name | Type |
------ | ------ |
`meta` | KeyringPair$Meta |

___

###  type

• **type**: *KeypairType*

*Inherited from void*

Defined in node_modules/@polkadot/keyring/types.d.ts:31

## Methods

###  sign

▸ **sign**(`message`: Uint8Array, `options?`: SignOptions): *Uint8Array*

*Inherited from void*

Defined in node_modules/@polkadot/keyring/types.d.ts:37

**Parameters:**

Name | Type |
------ | ------ |
`message` | Uint8Array |
`options?` | SignOptions |

**Returns:** *Uint8Array*

___

###  toJson

▸ **toJson**(`passphrase?`: undefined | string): *KeyringPair$Json*

*Inherited from void*

Defined in node_modules/@polkadot/keyring/types.d.ts:38

**Parameters:**

Name | Type |
------ | ------ |
`passphrase?` | undefined &#124; string |

**Returns:** *KeyringPair$Json*

___

###  verify

▸ **verify**(`message`: Uint8Array, `signature`: Uint8Array): *boolean*

*Inherited from void*

Defined in node_modules/@polkadot/keyring/types.d.ts:39

**Parameters:**

Name | Type |
------ | ------ |
`message` | Uint8Array |
`signature` | Uint8Array |

**Returns:** *boolean*

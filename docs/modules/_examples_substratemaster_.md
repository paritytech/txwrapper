[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["examples/substrateMaster"](_examples_substratemaster_.md)

# Module: "examples/substrateMaster"

## Index

### Variables

* [DEV_CHAIN_SS58_FORMAT](_examples_substratemaster_.md#const-dev_chain_ss58_format)

### Functions

* [main](_examples_substratemaster_.md#main)
* [rpcToNode](_examples_substratemaster_.md#rpctonode)
* [signWith](_examples_substratemaster_.md#signwith)

## Variables

### `Const` DEV_CHAIN_SS58_FORMAT

• **DEV_CHAIN_SS58_FORMAT**: *42* = 42

*Defined in [examples/substrateMaster.ts:19](https://github.com/paritytech/txwrapper/blob/fc81d5b/examples/substrateMaster.ts#L19)*

We're on a generic Substrate chain, default SS58 prefix is 42.

## Functions

###  main

▸ **main**(): *Promise‹void›*

*Defined in [examples/substrateMaster.ts:74](https://github.com/paritytech/txwrapper/blob/fc81d5b/examples/substrateMaster.ts#L74)*

Entry point of the script. This script assumes a Substrate node is running
locally on `ws://localhost:9944`.

**Returns:** *Promise‹void›*

___

###  rpcToNode

▸ **rpcToNode**(`method`: string, `params`: any[]): *Promise‹any›*

*Defined in [examples/substrateMaster.ts:27](https://github.com/paritytech/txwrapper/blob/fc81d5b/examples/substrateMaster.ts#L27)*

Send a JSONRPC request to the node at http://localhost:9933.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`method` | string | - | The JSONRPC request method. |
`params` | any[] | [] | The JSONRPC request params.  |

**Returns:** *Promise‹any›*

___

###  signWith

▸ **signWith**(`registry`: TypeRegistry, `pair`: KeyringPair, `signingPayload`: string): *string*

*Defined in [examples/substrateMaster.ts:56](https://github.com/paritytech/txwrapper/blob/fc81d5b/examples/substrateMaster.ts#L56)*

Signing function. Implement this on the OFFLINE signing device.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`registry` | TypeRegistry | - |
`pair` | KeyringPair | The signing pair. |
`signingPayload` | string | Payload to sign.  |

**Returns:** *string*

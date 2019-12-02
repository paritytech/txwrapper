[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["balanceTransfer"](../modules/_balancetransfer_.md) › [TxInfo](_balancetransfer_.txinfo.md)

# Interface: TxInfo

## Hierarchy

* **TxInfo**

## Index

### Properties

* [address](_balancetransfer_.txinfo.md#address)
* [amount](_balancetransfer_.txinfo.md#amount)
* [blockHash](_balancetransfer_.txinfo.md#blockhash)
* [blockNumber](_balancetransfer_.txinfo.md#blocknumber)
* [genesisHash](_balancetransfer_.txinfo.md#genesishash)
* [metadataRpc](_balancetransfer_.txinfo.md#metadatarpc)
* [nonce](_balancetransfer_.txinfo.md#nonce)
* [specVersion](_balancetransfer_.txinfo.md#specversion)
* [tip](_balancetransfer_.txinfo.md#tip)
* [to](_balancetransfer_.txinfo.md#to)

## Properties

###  address

• **address**: *string*

*Defined in [src/balanceTransfer.ts:16](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/4ad0632/src/balanceTransfer.ts#L16)*

The ss-58 encoded address

___

###  amount

• **amount**: *number*

*Defined in [src/balanceTransfer.ts:20](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/4ad0632/src/balanceTransfer.ts#L20)*

The amount to send

___

###  blockHash

• **blockHash**: *string*

*Defined in [src/balanceTransfer.ts:24](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/4ad0632/src/balanceTransfer.ts#L24)*

The checkpoint hash of the block, in hex

___

###  blockNumber

• **blockNumber**: *number*

*Defined in [src/balanceTransfer.ts:28](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/4ad0632/src/balanceTransfer.ts#L28)*

The checkpoint block number (u32), in hex

___

###  genesisHash

• **genesisHash**: *string*

*Defined in [src/balanceTransfer.ts:32](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/4ad0632/src/balanceTransfer.ts#L32)*

The genesis hash of the chain, in hex

___

###  metadataRpc

• **metadataRpc**: *string*

*Defined in [src/balanceTransfer.ts:37](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/4ad0632/src/balanceTransfer.ts#L37)*

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`

___

###  nonce

• **nonce**: *number*

*Defined in [src/balanceTransfer.ts:41](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/4ad0632/src/balanceTransfer.ts#L41)*

The nonce for this transaction,

___

###  specVersion

• **specVersion**: *number*

*Defined in [src/balanceTransfer.ts:45](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/4ad0632/src/balanceTransfer.ts#L45)*

The current spec version for the runtime

___

###  tip

• **tip**: *number*

*Defined in [src/balanceTransfer.ts:49](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/4ad0632/src/balanceTransfer.ts#L49)*

The tip for this transaction, in hex

___

###  to

• **to**: *string*

*Defined in [src/balanceTransfer.ts:53](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/4ad0632/src/balanceTransfer.ts#L53)*

The recipient address, ss-58 encoded

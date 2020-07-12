[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/proxy/addProxy"](../modules/_src_methods_proxy_addproxy_.md) › [ProxyAddProxy](_src_methods_proxy_addproxy_.proxyaddproxy.md)

# Interface: ProxyAddProxy

## Hierarchy

* object

  ↳ **ProxyAddProxy**

## Index

### Properties

* [proxy](_src_methods_proxy_addproxy_.proxyaddproxy.md#proxy)
* [proxyType](_src_methods_proxy_addproxy_.proxyaddproxy.md#proxytype)

## Properties

###  proxy

• **proxy**: *string*

*Defined in [src/methods/proxy/addProxy.ts:13](https://github.com/paritytech/txwrapper/blob/1ac58f6/src/methods/proxy/addProxy.ts#L13)*

The account that the `caller` would like to make a proxy.

___

###  proxyType

• **proxyType**: *string*

*Defined in [src/methods/proxy/addProxy.ts:23](https://github.com/paritytech/txwrapper/blob/1ac58f6/src/methods/proxy/addProxy.ts#L23)*

The permissions for this proxy account. See the runtime for the `call` filters.
Current known types (Polkadot v8, Kusama v2008, Westend v28):
  - 'Any'
  - 'NonTransfer'
  - 'Governance'
  - 'Staking'
  - 'SudoBalances' (only relevant if sender is `sudo`)

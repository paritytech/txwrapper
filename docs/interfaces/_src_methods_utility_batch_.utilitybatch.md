[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/utility/batch"](../modules/_src_methods_utility_batch_.md) › [UtilityBatch](_src_methods_utility_batch_.utilitybatch.md)

# Interface: UtilityBatch

## Hierarchy

* object

  ↳ **UtilityBatch**

## Index

### Properties

* [calls](_src_methods_utility_batch_.utilitybatch.md#calls)

## Properties

###  calls

• **calls**: *string | object[]*

*Defined in [src/methods/utility/batch.ts:15](https://github.com/paritytech/txwrapper/blob/e82a68c/src/methods/utility/batch.ts#L15)*

The calls to be dispatched from the same origin.
To take advantage of txwrapper methods, this could be an array of
UnsignedTransaction.method.

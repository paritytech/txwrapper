# How to use `txwrapper`

Here's a mini-tutorial on how `txwrapper` can interact with a Substrate chain. We're using a dev chain in this example.

## Get Started

1. Run a Substrate dev chain.

```bash
substrate --dev
```

2. Run the example script in this folder. It will interact with the Substrate node.

```bash
./node_module/.bin/ts-node example/index.ts
```

## Expected Output

```

```

## Offline vs Online

In `./index.ts`, the only online parts of the scripts are all using the `rpcToNode` function. Everything else can be performed offline. In particular, this example shows how to perform offline:

- generate a tx
- create its signing payload
- sign the signing payload
- derive the tx hash
- decoding at various levels of the tx lifecycle

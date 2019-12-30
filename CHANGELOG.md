# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.3.2](https://github.com/amaurymartiny/txwrapper/compare/v0.3.1...v0.3.2) (2019-12-30)


### Features

* Add staking functions ([#19](https://github.com/amaurymartiny/txwrapper/issues/19)) ([28dd82c](https://github.com/amaurymartiny/txwrapper/commit/28dd82c25b945586c9163f00a9dadf2ce148d3be))

### [0.3.1](https://github.com/amaurymartiny/txwrapper/compare/v0.3.0...v0.3.1) (2019-12-16)


### Features

* Add ss58Format as param to importPrivateKey ([#16](https://github.com/amaurymartiny/txwrapper/issues/16)) ([f47611e](https://github.com/amaurymartiny/txwrapper/commit/f47611ea569f72ca0e98f4c9a296ab5a65c84cea))


### Bug Fixes

* Add decodeSigningPayload to decode export ([#15](https://github.com/amaurymartiny/txwrapper/issues/15)) ([38505a6](https://github.com/amaurymartiny/txwrapper/commit/38505a6f9841a93c41bb8ee41780544ac7071a73))
* Put function importPrivateKey in correct file ([#14](https://github.com/amaurymartiny/txwrapper/issues/14)) ([14e1c27](https://github.com/amaurymartiny/txwrapper/commit/14e1c275ee2ba42f03d97a89c7cef6d5c42ca90c))

## [0.3.0](https://github.com/amaurymartiny/txwrapper/compare/v0.2.0...v0.3.0) (2019-12-11)


### ⚠ BREAKING CHANGES

* `generateKeypair` has been removed.

### Features

* Add importPrivateKey ([#13](https://github.com/amaurymartiny/txwrapper/issues/13)) ([d26ae4a](https://github.com/amaurymartiny/txwrapper/commit/d26ae4ac7dee6999bd9065fec62a8ccd1904dd66))

## [0.2.0](https://github.com/amaurymartiny/txwrapper/compare/v0.1.3...v0.2.0) (2019-12-06)


### ⚠ BREAKING CHANGES

* - `decodeSignedTx`, `decodeSigningPayload`, `decodeUnsignedTx` are not exposed from `@amaurymartiny/txwrapper` root anymore, as they are considered low-level. Consider using the high-level `decode` function, which can decode an unsigned tx or a signed tx.

```diff
- import { decodeSignedTx } from '@amaurymartiny/txwrapper';
+ import { decode } from '@amaurymartiny/txwrapper';

- decodeSignedTx('0x...');
+ decode('0x...');
```

* - If you still need to access the above functions separately, please use e.g. `import { decodeSigningPayload } from '@amaurymartiny/txwrapper/lib/decode/decodeSigningPayload'`

### Features

* Add `decode` for signedTx and signingPayload ([#10](https://github.com/amaurymartiny/txwrapper/issues/10)) ([674253e](https://github.com/amaurymartiny/txwrapper/commit/674253e7e1987a2190137a22841465b885071b69))
* Generic `decode` also decodes unsigned ([#12](https://github.com/amaurymartiny/txwrapper/issues/12)) ([a91f7ba](https://github.com/amaurymartiny/txwrapper/commit/a91f7ba8132e146ff2c52215c9e003a9998e752e))

### [0.1.3](https://github.com/amaurymartiny/txwrapper/compare/v0.1.2...v0.1.3) (2019-12-05)


### Bug Fixes

* Fix Polkadot SS58 prefix ([#9](https://github.com/amaurymartiny/txwrapper/issues/9)) ([dd63aa5](https://github.com/amaurymartiny/txwrapper/commit/dd63aa583f0323cabb0a88afbb3b08c14e32260e))

### [0.1.2](https://github.com/amaurymartiny/txwrapper/compare/v0.1.1...v0.1.2) (2019-12-05)


### Bug Fixes

* Add ss58 prefix for Polkadot ([#8](https://github.com/amaurymartiny/txwrapper/issues/8)) ([5f9fde8](https://github.com/amaurymartiny/txwrapper/commit/5f9fde87c912c86f0bb837ec746f4c138f5d0cf1))

### [0.1.1](https://github.com/amaurymartiny/txwrapper/compare/v0.1.0...v0.1.1) (2019-12-03)


### Bug Fixes

* Better typescript typings ([e9a7450](https://github.com/amaurymartiny/txwrapper/commit/e9a7450960def9cb00c32e54a61a8a09d68585c4))

## [0.1.0](https://github.com/amaurymartiny/txwrapper/compare/v0.0.5...v0.1.0) (2019-12-03)


### ⚠ BREAKING CHANGES

* - `decodeTx` has been renamed to `decodeSignedTx` for clarity

### Features

* Add decodeSigningPayload and getTxHash ([#7](https://github.com/amaurymartiny/txwrapper/issues/7)) ([ece7146](https://github.com/amaurymartiny/txwrapper/commit/ece7146336e3846958f721b747fea7dfdc7679ac))
* Add decodeUnsignedTx ([#6](https://github.com/amaurymartiny/txwrapper/issues/6)) ([2a1460c](https://github.com/amaurymartiny/txwrapper/commit/2a1460c23e8d3675e6424d0468ea7b144117b741))


### Bug Fixes

* Fix keepAlive ([#5](https://github.com/amaurymartiny/txwrapper/issues/5)) ([ef676a0](https://github.com/amaurymartiny/txwrapper/commit/ef676a0ee111924656b73f01fe35789b39290604))

### [0.0.5](https://github.com/amaurymartiny/txwrapper/compare/v0.0.4...v0.0.5) (2019-12-02)


### Features

* Add balances::transfer_keep_alive ([#4](https://github.com/amaurymartiny/txwrapper/issues/4)) ([d480fb9](https://github.com/amaurymartiny/txwrapper/commit/d480fb9de9d23c652172386554c20db621ec4e2e))

### [0.0.4](https://github.com/amaurymartiny/txwrapper/compare/v0.0.3...v0.0.4) (2019-12-02)


### Bug Fixes

* Small bugs here and there ([#3](https://github.com/amaurymartiny/txwrapper/issues/3)) ([f300844](https://github.com/amaurymartiny/txwrapper/commit/f300844c87e4954711aafd5393e7247295059a81))

### [0.0.3](https://github.com/amaurymartiny/txwrapper/compare/v0.0.2...v0.0.3) (2019-11-29)

### [0.0.2](https://github.com/amaurymartiny/txwrapper/compare/v0.0.1...v0.0.2) (2019-11-29)

### Bug Fixes

- Output ts declaration files ([5e0d0ff](https://github.com/amaurymartiny/txwrapper/commit/5e0d0ff8f82e49dd6cca66e1180838116014413e))

### 0.0.1 (2019-11-29)

### Features

- Add deriveAddress ([b9a1cc8](https://github.com/amaurymartiny/txwrapper/commit/b9a1cc8a3745194e7f12043606009751688464df))
- Add generateKeyPair ([a8d817d](https://github.com/amaurymartiny/txwrapper/commit/a8d817d041830f5243ad9d655288e11e88803bd2))
- balanceTransfer ([a4df58a](https://github.com/amaurymartiny/txwrapper/commit/a4df58aaf4fa18903c7d5a035de488f1af8fb881))
- decodeTx ([1135161](https://github.com/amaurymartiny/txwrapper/commit/1135161bf7837c7ffd8243d58279a3108f1a1e51))

### Bug Fixes

- Export everything ([0522dd8](https://github.com/amaurymartiny/txwrapper/commit/0522dd81073120a11d4bea20f43b4c88d9f207e3))

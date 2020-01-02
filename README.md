# @substrate/txwrapper

Helper funtions for offline transaction generation.

## Get Started

```bash
yarn add @substrate/txwrapper
```

In a JS file:

```typescript
import { importPrivateKey } from '@substrate/txwrapper';

console.log(importPrivateKey('0x...').address);
```

Go to [documentation](https://github.com/paritytech/txwrapper/tree/master/docs/globals.md) for all the functions.

## Contribute

We welcome contributions. Before submitting your PR, make sure to run the following commands:

- `yarn docs`: Will generate docs based on code comments
- `yarn test`: Make sure all tests pass
- `yarn lint`: Make sure your code follows our linting rules. You can also run `yarn lint --fix` to automatically fix some of those errors.

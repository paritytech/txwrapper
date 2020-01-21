[@substrate/txwrapper](README.md) › [Globals](globals.md)

# @substrate/txwrapper

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

- `yarn docs`: Will generate docs based on code comments.
- `yarn test`: Make sure all tests pass.
- `yarn lint`: Make sure your code follows our linting rules. You can also run `yarn lint --fix` to automatically fix some of those errors.

### Note for Maintainers

All the commits in this repo follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) spec. When merging a PR, make sure 1/ to use squash merge and 2/ that the title of the PR follows the Conventional Commits spec. This will make squash the PR into one conventional commit.

The history of commits will be used to generate the [CHANGELOG](./CHANGELOG). To do so, run `yarn deploy` **on the master branch**. This command will look at all the commits since the latest tag, bump the package version according to semver rules, and generate a new CHANGELOG.

There might be special cases where you don't want to follow semver. In this case, run `yarn deploy -r {major,minor,patch}`.

The above command, which only does local operations and doesn't push anything, will output more or less the following lines:

```bash
$ yarn deploy
yarn run v1.21.1
$ yarn build && standard-version -r minor
$ rimraf lib/ && tsc
✔ bumping version in package.json from 0.3.2 to 0.4.0
✔ outputting changes to CHANGELOG.md
✔ committing package.json and CHANGELOG.md
✔ tagging release v0.4.0
ℹ Run `git push --follow-tags origin master && npm publish` to publish
```

To publish the new package, just follow the instructions: `git push --follow-tags origin master && npm publish`. You must have access to the `@substrate` organization on npm to be able to publish.

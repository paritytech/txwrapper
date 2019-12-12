import { importPrivateKey } from './importPrivateKey';
import { KUSAMA_SS58_FORMAT } from './util/constants';

const PRIVATE_KEY =
  '0x9d61b19deffd5a60ba844af492ec2cc44449c5697b326919703bac031cae7f60';

describe('importPrivateKey', () => {
  it('should work', () => {
    const keypair = importPrivateKey(PRIVATE_KEY, KUSAMA_SS58_FORMAT);

    expect(keypair.address).toBe(
      'HSgj13mnepYxuysui2XroHKigftFpQsg1dcSfA9PckdZJW4'
    );
  });
});

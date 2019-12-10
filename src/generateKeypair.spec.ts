import { generateKeypair, importPrivateKey } from './generateKeypair';

const PRIVATE_KEY =
  '0x9d61b19deffd5a60ba844af492ec2cc44449c5697b326919703bac031cae7f60';

describe('generateKeypair', () => {
  it('should work', () => {
    const keypair = generateKeypair();

    expect(keypair.address).toBeDefined();
  });
});

describe('importPrivateKey', () => {
  it('should work', () => {
    const keypair = importPrivateKey(PRIVATE_KEY);

    expect(keypair.address).toBe(
      'HSgj13mnepYxuysui2XroHKigftFpQsg1dcSfA9PckdZJW4'
    );
  });
});

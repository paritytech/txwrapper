import { generateKeypair } from './generateKeypair';

describe('generateKeypair', () => {
  it('should work', () => {
    const keypair = generateKeypair();

    expect(keypair.address).toBeDefined();
  });
});

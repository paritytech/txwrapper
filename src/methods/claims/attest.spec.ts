import {
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  TEST_OPTIONS,
  testBaseTxInfo,
} from '../../util';
import { attest } from './attest';

// For testing purposes we use Substrate metadata, which does not have the
// `claims` pallet. Skipping.
describe.skip('claims::attest', () => {
  it('should work', () => {
    const unsigned = attest(
      TEST_METHOD_ARGS.claims.attest,
      TEST_BASE_TX_INFO,
      TEST_OPTIONS
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe('FIXME');
  });

  it('should accept big numbers as string', () => {
    const unsigned = attest(
      {
        ...TEST_METHOD_ARGS.claims.attest,
        value: '9007199254740996', // MAX_SAFE_INTEGER + 5
      },
      TEST_BASE_TX_INFO,
      TEST_OPTIONS
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe('FIXME');
  });
});

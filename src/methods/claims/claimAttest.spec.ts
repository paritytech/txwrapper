import {
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  TEST_OPTIONS,
  testBaseTxInfo,
} from '../../util';
import { claimAttest } from './claimAttest';

// For testing purposes we use Substrate metadata, which does not have the
// `claims` pallet. Skipping.
describe.skip('claims::claimAttest', () => {
  it('should work', () => {
    const unsigned = claimAttest(
      TEST_METHOD_ARGS.claims.claimAttest,
      TEST_BASE_TX_INFO,
      TEST_OPTIONS
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe('FIXME');
  });

  it('should accept big numbers as string', () => {
    const unsigned = claimAttest(
      {
        ...TEST_METHOD_ARGS.claims.claimAttest,
        value: '9007199254740996', // MAX_SAFE_INTEGER + 5
      },
      TEST_BASE_TX_INFO,
      TEST_OPTIONS
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe('FIXME');
  });
});

import metadataRpc from '@polkadot/metadata/Metadata/v9/static';

import { balanceTransfer } from './balanceTransfer';

describe('balanceTransfer', () => {
  it('should work', () => {
    const call = balanceTransfer(
      metadataRpc,
      'Fy2rsYCoowQBtuFXqLE65ehAY9T6KWcGiNCQAyPDCkfpm4s',
      12
    );

    expect(call).toBe(
      '0x0600ff96074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30'
    );
  });
});

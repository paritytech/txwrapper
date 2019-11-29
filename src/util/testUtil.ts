import metadataRpc from '@polkadot/metadata/Metadata/v9/static';

import { TxInfo } from '../balanceTransfer';

export const TEST_TX_INFO: TxInfo = {
  address: 'HgWWnAXFGikrPVD2FrZ6CRk7KnYdVDn7zVyye8hqFPMc5g1',
  amount: 12,
  blockHash:
    '0x1fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582',
  blockNumber: 4302222,
  genesisHash:
    '0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636',
  metadataRpc,
  nonce: 2,
  specVersion: 1019,
  tip: 0,
  to: 'Fy2rsYCoowQBtuFXqLE65ehAY9T6KWcGiNCQAyPDCkfpm4s'
};

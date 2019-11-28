import Metadata from '@polkadot/metadata';
import { TypeRegistry } from '@polkadot/types';

/**
 * Construct a balance transfer transaction offline
 *
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC all `state_getMetadata`
 * @param to - The recipient of the transfer
 * @param amount - The amount to send
 */
export function balanceTransfer(
  metadataRpc: string,
  to: string,
  amount: number
): string {
  const registry = new TypeRegistry();
  const metadata = new Metadata(registry, metadataRpc);

  return metadata.tx.balances.transfer(to, amount).toHex();
}

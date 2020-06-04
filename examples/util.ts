/**
 * @ignore Don't show this file in documentation.
 */ /** */

import { SignOptions } from '@polkadot/keyring/types';
import { IKeyringPair } from '@polkadot/types/types';
import { hexToU8a, u8aToHex } from '@polkadot/util';
import { blake2AsU8a } from '@polkadot/util-crypto';

// a helper function for both types of payloads, Raw and metadata-known
export function sign(
  signerPair: IKeyringPair,
  u8a: Uint8Array,
  options?: SignOptions
): Uint8Array {
  const encoded = u8a.length > 256 ? blake2AsU8a(u8a) : u8a;

  return signerPair.sign(encoded, options);
}

/**
 * Send a JSONRPC request to the node at http://localhost:9933.
 *
 * @param method - The JSONRPC request method.
 * @param params - The JSONRPC request params.
 */
export function rpcToNode(method: string, params: any[] = []): Promise<any> {
  return fetch('http://localhost:9933', {
    body: JSON.stringify({
      id: 1,
      jsonrpc: '2.0',
      method,
      params,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
    .then((response) => response.json())
    .then(({ error, result }) => {
      if (error) {
        throw new Error(
          `${error.code} ${error.message}: ${JSON.stringify(error.data)}`
        );
      }

      return result;
    });
}

/**
 * Signing function. Implement this on the OFFLINE signing device.
 *
 * @param pair - The signing pair.
 * @param payload - Payload to sign, in hex.
 * @see https://github.com/polkadot-js/api/blob/master/packages/types/src/extrinsic/util.ts
 */
export function signWith(pair: IKeyringPair, payload: string): string {
  const u8a = hexToU8a(payload);
  const encoded = u8a.length > 256 ? blake2AsU8a(u8a) : u8a;

  return u8aToHex(pair.sign(encoded, { withType: true }));
}

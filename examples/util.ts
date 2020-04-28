/**
 * @ignore Don't show this file in documentation.
 */ /** */

import { TypeRegistry } from '@polkadot/types';
import { TRANSACTION_VERSION } from '@polkadot/types/extrinsic/v4/Extrinsic';

import { KeyringPair } from '../src';

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
        throw new Error(error.message);
      }

      return result;
    });
}

/**
 * Signing function. Implement this on the OFFLINE signing device.
 *
 * @param pair - The signing pair.
 * @param signingPayload - Payload to sign.
 */
export function signWith(
  registry: TypeRegistry,
  pair: KeyringPair,
  signingPayload: string
): string {
  const { signature } = registry
    .createType('ExtrinsicPayload', signingPayload, {
      version: TRANSACTION_VERSION,
    })
    .sign(pair);

  return signature;
}

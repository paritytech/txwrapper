/**
 * @ignore
 */ /** */

import { createTypeUnsafe } from '@polkadot/types/create';
import { Call, ExtrinsicPayload } from '@polkadot/types/interfaces';

import {
	createMetadata,
	EXTRINSIC_VERSION,
	OptionsWithMeta,
	toTxMethod,
	TxInfo,
} from '../util';

export type DecodedSigningPayload = Omit<TxInfo, 'address' | 'blockNumber'>;

/**
 * Parse the transaction information from a signing payload.
 *
 * @param signingPayload - The signing payload, in hex.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export function decodeSigningPayload(
	signingPayload: string,
	options: OptionsWithMeta,
	toInt = false
): DecodedSigningPayload {
	const { metadataRpc, registry } = options;

	registry.setMetadata(createMetadata(registry, metadataRpc));

	// We use `createTypeUnsafe` here because it allows us to specify `withoutLog: true`,
	// which silences an internal error message from polkadot-js. This is helpful in `decode`
	// which takes in just a string. We determine if the string is a signing payload or a
	// signed tx by first attempting to decode it as a signing payload with this function.
	// If that fails we catch, knowing through process of elimination it should be a
	// signed tx. `withoutLog: true` prevents an alarming error message from bubbling up
	// to the user when we catch.
	const payload: ExtrinsicPayload = createTypeUnsafe(
		registry,
		'ExtrinsicPayload',
		[
			signingPayload,
			{
				version: EXTRINSIC_VERSION,
			},
		],
		{ withoutLog: true }
	);
	const methodCall: Call = createTypeUnsafe(
		registry,
		'Call',
		[payload.method],
		{
			withoutLog: true,
		}
	);
	const method = toTxMethod(registry, methodCall, toInt);

	return {
		blockHash: payload.blockHash.toHex(),
		eraPeriod: payload.era.asMortalEra.period.toNumber(),
		genesisHash: payload.genesisHash.toHex(),
		metadataRpc,
		method,
		nonce: payload.nonce.toNumber(),
		specVersion: payload.specVersion.toNumber(),
		tip: payload.tip.toNumber(),
		transactionVersion: payload.transactionVersion.toNumber(),
	};
}

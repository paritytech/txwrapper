export interface TxInfoBond {
	/**
	 * The ss-58 encoded address of the sending account.
	 */
	address: string;
	/**
	 * The SS-58 encoded address of the Controller account.
	 */
	controller: string;
	/**
	 * The number of tokens to bond.
	 */
	value: number;
	/**
	 * The rewards destination. Can be "Stash", "Staked", or "Controller".
	 */
	payee: string;
	/**
	 * The checkpoint hash of the block, in hex.
	 */
	blockHash: string;
	/**
	 * The checkpoint block number (u32), in hex.
	 */
	blockNumber: number;
	/**
	 * The genesis hash of the chain, in hex.
	 */
	genesisHash: string;
	/**
	 * The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
	 * call `state_getMetadata`.
	 */
	metadataRpc: string;
	/**
	 * The nonce for this transaction.
	 */
	nonce: number;
	/**
	 * The current spec version for the runtime.
	 */
	specVersion: number;
	/**
	 * The tip for this transaction, in hex.
	 */
	tip: number;
	/**
	 * The amount of time (in second) the transaction is valid for. Will be
	 * translated into a mortal era.
	 */
	validityPeriod: number;
}

export interface TxInfoNominate {
	/**
	 * The ss-58 encoded address of the sending account.
	 */
	address: string;
	/**
	 * The SS-58 encoded addresses of the targets you wish to nominate. A maximum of 16
	 * nominations are allowed.
	 * 
	 * Format: "ADDR1,ADDR2,ADDR3,..."
	 * TODO: Check if this format will submit properly. 
	 * Rust code: targets: Vec<<T::Lookup as StaticLookup>::Source>
	 * 
	 * Warning: This provides no checks as to whether these targets are actual validators.
	 */
	targets: string;
	/**
	 * The checkpoint hash of the block, in hex.
	 */
	blockHash: string;
	/**
	 * The checkpoint block number (u32), in hex.
	 */
	blockNumber: number;
	/**
	 * The genesis hash of the chain, in hex.
	 */
	genesisHash: string;
	/**
	 * The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
	 * call `state_getMetadata`.
	 */
	metadataRpc: string;
	/**
	 * The nonce for this transaction.
	 */
	nonce: number;
	/**
	 * The current spec version for the runtime.
	 */
	specVersion: number;
	/**
	 * The tip for this transaction, in hex.
	 */
	tip: number;
	/**
	 * The amount of time (in second) the transaction is valid for. Will be
	 * translated into a mortal era.
	 */
	validityPeriod: number;
}

export interface TxInfoUnbond {
	/**
	 * The ss-58 encoded address of the sending account.
	 */
	address: string;
	/**
	 * The number of tokens to unbond.
	 */
	value: number;
	/**
	 * The checkpoint hash of the block, in hex.
	 */
	blockHash: string;
	/**
	 * The checkpoint block number (u32), in hex.
	 */
	blockNumber: number;
	/**
	 * The genesis hash of the chain, in hex.
	 */
	genesisHash: string;
	/**
	 * The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
	 * call `state_getMetadata`.
	 */
	metadataRpc: string;
	/**
	 * The nonce for this transaction.
	 */
	nonce: number;
	/**
	 * The current spec version for the runtime.
	 */
	specVersion: number;
	/**
	 * The tip for this transaction, in hex.
	 */
	tip: number;
	/**
	 * The amount of time (in second) the transaction is valid for. Will be
	 * translated into a mortal era.
	 */
	validityPeriod: number;
  }

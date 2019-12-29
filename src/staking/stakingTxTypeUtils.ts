import { BaseTxInfo } from '../util/types';

export interface TxInfoBond extends BaseTxInfo {
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
}

export interface TxInfoNominate extends BaseTxInfo {
  /**
   * The SS-58 encoded addresses of the targets you wish to nominate. A maximum of 16
   * nominations are allowed.
   *
   * Warning: This provides no checks as to whether these targets are actual validators.
   */
  targets: Array<string>;
}

export interface TxInfoUnbond extends BaseTxInfo {
  /**
   * The number of tokens to unbond.
   */
  value: number;
}

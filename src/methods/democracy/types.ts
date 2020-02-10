/**
 * A vote in a referendum
 */
export type Vote = {
  /*
   * Whether the vote is to enact the proposal (true) or keep the status quo (false).
   */
  aye: boolean;

  /*
   * A value denoting the strength of conviction of a vote. Can be "None", "Locked1x",
   * "Locked2x", "Locked3x", "Locked4x", or "Locked5x".
   */
  conviction: string;
};

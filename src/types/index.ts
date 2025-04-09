
export type Chain = 'All' | 'ARB' | 'AVA' | 'BAS' | 'BSC' | 'CEL' | 'ETH' | 'OPT' | 'POL';
export interface Pool {
  id: string;
  chain: String;
  token: 'USDC' | 'USDT';
  tvl: number;
  apr: number;
  imbalance: string;
  imbalanceValue: number;
  yourLP?: number;
  earned?: number;
  chainAbbreviation: string;
}

export interface PoolStats {
  tvl: number;
  apr: number;
  rewards: number;
}

export interface ExplorerStats {
  volume: number;
  tranfers: number;
}

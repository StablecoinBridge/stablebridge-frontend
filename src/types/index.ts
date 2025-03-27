
export type Chain = 'All' | 'Arbitrum' | 'Avalanche' | 'Base' | 'BNB Chain' | 'Celo' | 'Ethereum' | 'Optimism' | 'Polygon';

export interface Pool {
  id: string;
  chain: Chain;
  token: 'USDC' | 'USDT';
  tvl: number;
  apr: number;
  imbalance: string;
  imbalanceValue: number;
  yourLP?: number;
  earned?: number;
}

export interface PoolStats {
  tvl: number;
  apr: number;
  rewards: number;
}
import { Chain, ExplorerStats, Pool, PoolStats } from '@/types';

export const poolStats: PoolStats = {
  tvl: 30297285.29,
  apr: 8.35,
  rewards: 48415.28,
};
export const explorerStats: ExplorerStats = {
  volume: 2417307.10,
  tranfers: 568,
};
export const pools: Pool[] = [
  {
    id: '1',
    chain: 'Arbitrum',
    token: 'USDC',
    tvl: 1041603.79,
    apr: 5.11,
    imbalance: '+1.80%',
    imbalanceValue: 1.80,
    yourLP: 0.00,
    earned: 0.00,
  },
  {
    id: '2',
    chain: 'Arbitrum',
    token: 'USDT',
    tvl: 185596.34,
    apr: 2.71,
    imbalance: '+3.34%',
    imbalanceValue: 3.34,
    yourLP: 0.00,
    earned: 0.00,
  },
  {
    id: '3',
    chain: 'Avalanche',
    token: 'USDC',
    tvl: 70007.56,
    apr: 1.31,
    imbalance: '+1.89%',
    imbalanceValue: 1.89,
    yourLP: 0.00,
    earned: 0.00,
  },
  {
    id: '4',
    chain: 'Avalanche',
    token: 'USDT',
    tvl: 78179.98,
    apr: 0.92,
    imbalance: '+1.17%',
    imbalanceValue: 1.17,
    yourLP: 0.00,
    earned: 0.00,
  },
  {
    id: '5',
    chain: 'Base',
    token: 'USDC',
    tvl: 748054.28,
    apr: 4.8,
    imbalance: '+1.83%',
    imbalanceValue: 1.83,
    yourLP: 0.00,
    earned: 0.00,
  },
  {
    id: '6',
    chain: 'BNB Chain',
    token: 'USDT',
    tvl: 3763508.00,
    apr: 5.53,
    imbalance: '+1.43%',
    imbalanceValue: 1.43,
    yourLP: 0.00,
    earned: 0.00,
  },
  {
    id: '7',
    chain: 'Celo',
    token: 'USDT',
    tvl: 95622.45,
    apr: 3.25,
    imbalance: '+2.11%',
    imbalanceValue: 2.11,
    yourLP: 0.00,
    earned: 0.00,
  },
];

export const getChains = (): Chain[] => {
  const chainSet = new Set<Chain>(pools.map(pool => pool.chain));
  return ['All', ...Array.from(chainSet)];
};

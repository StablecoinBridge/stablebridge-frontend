import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

interface Chain {
  id: string;
  name: string;
  icon: string;
}

interface Token {
  symbol: string;
  name: string;
  icon: string;
}

const chains: Chain[] = [
  { id: 'arbitrum', name: 'Arbitrum', icon: '⚡' },
  { id: 'avalanche', name: 'Avalanche', icon: '🔺' },
  { id: 'base', name: 'Base', icon: '🔵' },
  { id: 'bnb', name: 'BNB Chain', icon: '💛' },
  { id: 'celo', name: 'Celo', icon: '🌟' },
  { id: 'ethereum', name: 'Ethereum', icon: '💠' },
  { id: 'optimism', name: 'OP Mainnet', icon: '🔴' },
  { id: 'polygon', name: 'Polygon', icon: '🟣' },
  { id: 'solana', name: 'Solana', icon: '🟢' },
  { id: 'stellar', name: 'Stellar', icon: '🌠' },
  { id: 'sui', name: 'Sui', icon: '🔷' },
  { id: 'tron', name: 'Tron', icon: '🔺' }
]

const avalancheTokens: Token[] = [
  { symbol: 'USDC', name: 'USD Coin', icon: '💲' },
  { symbol: 'USDT', name: 'Tether USD', icon: '💱' }
]

const SwapDialog = ({open, onClose}: {open: boolean, onClose: () => void}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-purple-100 rounded-[30px] border-none sm:max-w-[430px] w-full p-4">
        <div className="flex justify-between items-center mb-4">
          <DialogTitle className="text-xl font-semibold text-purple-900">
            Swap from
          </DialogTitle>
        </div>

        {/* Chain Grid */}
        <div className="grid grid-cols-3 gap-2 mb-2">
          {chains.map((chain) => (
            <button
              key={chain.id}
              className="flex items-center border border-gray-300 gap-2 p-2 rounded-full hover:bg-purple-200 cursor-pointer transition-colors"
            >
              <span className="text-xl">{chain.icon}</span>
              <span className="text-[12px] font-medium text-purple-900">{chain.name}</span>
            </button>
          ))}
        </div>

        {/* Avalanche Tokens Section */}
        <div className="mt-1">
          <h3 className="flex items-center gap-2 text-lg font-medium mb-3">
            <span className="text-xl">🔺</span>
            Avalanche tokens
          </h3>
          <div className="space-y-2">
            {avalancheTokens.map((token) => (
              <button
                key={token.symbol}
                className="w-full flex items-center gap-3 p-3 rounded-full hNover:bg-purple-200 cursor-pointer transition-colors"
              >
                <span className="text-xl">{token.icon}</span>
                <div className="flex flex-col items-start">
                  <span className="font-medium">{token.symbol}</span>
                  <span className="text-[12px] text-gray-500">{token.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SwapDialog
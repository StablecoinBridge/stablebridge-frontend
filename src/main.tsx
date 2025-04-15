import { StrictMode } from 'react'
import { createAppKit } from '@reown/appkit/react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PoolsProvider } from "@/contexts/PoolsContext";
import { ThemeProvider } from "@/contexts/ThemeContext";  
import { projectId, metadata, networks, wagmiAdapter } from './contexts/WalletContext.tsx';
import { WagmiProvider } from 'wagmi'
const queryClient = new QueryClient();

createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true
  },
  themeMode: "light",
  themeVariables: {
    "--w3m-accent": "#f3e8ff",
    "--w3m-color-mix": "#f3e8ff",
    "--w3m-color-mix-strength": 20
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <PoolsProvider>
              <App />
            </PoolsProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </TooltipProvider>
    </BrowserRouter>
    </WagmiProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PoolsProvider } from "@/contexts/PoolsContext";
import { ThemeProvider } from "@/contexts/ThemeContext";  
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
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
  </StrictMode>,
)

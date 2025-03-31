
import Home from '@/pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Liquidity from './pages/Liquidity'
import Swap from './pages/Swap'
import Ranks from './pages/Ranks'
import Explorer from './pages/Explorer'


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/swap" element={<Swap/>} />
      <Route path="/liquidity" element={<Liquidity />} />
      <Route path="/explorer" element={<Explorer />} />
      <Route path="/ranks" element={<Ranks />} />
      <Route path="*" element={<NotFound />} /> 
    </Routes>
    </>
  )
}

export default App


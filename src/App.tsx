
import Home from '@/pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Liquidity from './pages/Liquidity'
import Explorer from './pages/Explorer'
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} /> 
      <Route path="/liquidity" element={<Liquidity />} />
      <Route path="/explorer" element={<Explorer />} />
    </Routes>
    </>
  )
}

export default App


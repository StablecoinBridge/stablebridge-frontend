
import Home from '@/pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Liquidity from './pages/Liquidity'
<<<<<<< HEAD
import Swap from './pages/Swap'
=======
import Explorer from './pages/Explorer'
>>>>>>> 3bc5460b495f240af566cb06969e37f401df2741
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/swap" element={<Swap/>} />
      <Route path="/liquidity" element={<Liquidity />} />
<<<<<<< HEAD
      <Route path="*" element={<NotFound />} /> 
=======
      <Route path="/explorer" element={<Explorer />} />
>>>>>>> 3bc5460b495f240af566cb06969e37f401df2741
    </Routes>
    </>
  )
}

export default App


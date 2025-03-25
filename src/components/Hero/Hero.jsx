import React from 'react'
import heroi from '../Assets/Img/Asset 2@2000x.png'
import './Hero.css'

export const Hero = () => {
  return (
    <div className='hero'>
    <div className='row'>
      <div className='col-10 col-md-6 px-3'>
        <div className='m-3 p-3'>
          <h3 className='m-2 py-3 px-2 textcol '>
          Transfer stablecoins between EVM
                & non-EVM chains
                   Swap stablecoins

          </h3>
          <span className='ms-2 py-4'>
           
          </span>
          <div className=''>
          <button className='btn btn-info my-4 mx-2 w-75 rounded-pill bgcol'> Swap StableCoins </button>
          </div>
        </div>
      </div>
      <div className='col-10 col-md-6 px-3 d-none d-md-block'>
        <div className='pt-5 '>
        <img className=" mx-5 mt-5 pt-5 her" src={heroi} width={"400px"} alt="" />
        </div>
      </div>
    </div>
  </div>
  )
}

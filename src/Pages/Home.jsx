import React from 'react'

import {Navbar} from '../components/Navbar/Navbar'
import {Hero} from '../components/Hero/Hero'
export const Home = () => {
  return (
    <div className='bg-dark mx-3 rounded-5 p-4 '>
      <Navbar/>
      <Hero/>
    </div>
  )
}


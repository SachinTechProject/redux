import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import { Outlet } from 'react-router-dom'



function Home() {
  return (
    <div className='dark:bg-gray-800 -py-2 dark:text-white'>
        <Navbar />
        <hr />
            
            <main>
                <Outlet />
            </main>

        <Footer/>
    </div>
  )
}

export default Home
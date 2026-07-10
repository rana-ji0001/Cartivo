import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import VantaBackground from './backrgound/VantaBackground'


const App = () => {
  return (
    <>
      <VantaBackground />
      <main className='site-content'>
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>

  )
}

export default App

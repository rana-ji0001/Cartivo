import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import VantaBackground from './backrgound/VantaBackground'
import './Styles/globla.css'


const App = () => {
  return (
    <>
      <VantaBackground />
      <main className='site-content'>
        <div className='app'>
          <Navbar />
          <main className='main-content'>
            <Outlet />
          </main>
          <Footer />

        </div>
      </main>
    </>

  )
}

export default App

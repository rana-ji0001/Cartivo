import React from 'react'
import { Outlet } from 'react-router'
import { router } from './app.routes'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


const App = () => {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer/>
    </>

  )
}

export default App


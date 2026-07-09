import React from 'react'
import { Link } from 'react-router'
const Home = () => {
  return (
    <home className="home">
      <h1>Welcome to Cartivo</h1>
      <p>You are one step away from good deals</p>
      <Link to="/shop">Get Something for yourself folks</Link>
      
    </home>
  )
}

export default Home

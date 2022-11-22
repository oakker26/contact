import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
      <div className='containerd-flex justify-content-center align-items-center'>
          <Link to="/Login"><button className='btn btn-outline-info me-5 px-5 py-3'>Login</button></Link>
      <Link to="/Register"><button className='btn btn-outline-success px-5 py-3'>Register</button> </Link>
      
      </div>
  )
}

export default Home
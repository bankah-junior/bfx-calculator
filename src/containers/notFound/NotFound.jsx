import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='notFound w-screen h-screen'>
      <center className='md:p-8' style={{paddingTop: "13rem"}}>
        <Link to='/' className='font-bold md:text-6xl text-2xl'>
          <span className='back'>BACK </span> 
          <span className='home'>HOME</span>
        </Link>
      </center>
    </div>
  )
}

export default NotFound
import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className='app__loader flex__center' style={{flexFlow:"column"}}>
        <div className='loader' />
        <p className='p__opensans' style={{marginTop:"2rem"}}>Loading Assets</p>
    </div>
  )
};

export default Loader;
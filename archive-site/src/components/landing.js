import React from 'react';

const Landing = () => {
  return (
    <div className='landing'>
      <video src="https://www.w3schools.com/html/mov_bbb.mp4" autoPlay muted loop ></video>
        <div className='overlay'></div>
        <div className='content'>
            <h1>We shall not be moved</h1>
            <p>some subheading about encampment archive</p>
            <p>names if we want</p>
        </div> 
    </div>
  );
};

export default Landing;

import React from 'react'


const Landing = () => {
  return (
    <div className='landing'>
      <video 
        src="https://www.w3schools.com/html/mov_bbb.mp4" 
        autoPlay 
        muted 
        loop 
        style={{
          width: '100%',
          height: '100vh',
          objectFit: 'cover', // Covers the full viewport
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
    ></video>
        <div className='overlay'></div>
        <div className='content'>
            <h1>We shall not be moved</h1>
            <p>some subheading about encampment archive</p>
            <p>names/credit?</p>
        </div> 

    </div>
  )
}

export default Landing
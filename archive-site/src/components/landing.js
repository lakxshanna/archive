import React from 'react'


const Landing = () => {
  return (
    <div className='landing'>
        <video src={`${process.env.PUBLIC_URL}/DSC_0286.mp4`} autoPlay muted loop></video>
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
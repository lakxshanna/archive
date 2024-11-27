import React from 'react';

const Landing = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div 
        style={{
          position: 'relative',
          width: '80%',
          maxWidth: '800px',
          height: '300px',
          overflow: 'hidden',
        }}
      >
        <video 
          src="https://www.w3schools.com/html/mov_bbb.mp4" 
          autoPlay 
          muted 
          loop 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        ></video>
        
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgba(0, 0, 0, 0.4)', // Optional dark overlay
          }}
        >
          <div style={{ color: 'white', textAlign: 'center', padding: '20px' }}>
            <h1>We shall not be moved</h1>
            <p>Some subheading about encampment archive</p>
            <p>Names/credit?</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h2>More Content Here</h2>
        <p>This section can contain more information or other components.</p>
      </div>
    </div>
  );
};

export default Landing;

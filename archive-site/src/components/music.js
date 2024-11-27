import React, { useState } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';

const Music = () => {
  // Define the groups data directly in the component
  const groups = [
    {
      name: 'Yale Glee Club',
      description: 'A renowned group known for our beautiful renditions of classical and contemporary music.',
      sheetMusic: 'https://example.com/sheet1.pdf', // Replace with actual links
      videoSrc: 'https://www.w3schools.com/html/movie.mp4', // Replace with actual video URL
      imageSrc: 'https://via.placeholder.com/150', // Image placeholder (not used now)
    },
    {
      name: 'Chamber Orchestra',
      description: 'A special arrangement for our spring concert showcasing classical music.',
      sheetMusic: 'https://example.com/sheet2.pdf',
      videoSrc: 'https://www.w3schools.com/html/movie.mp4',
      imageSrc: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jazz Ensemble',
      description: 'An ensemble that improvises and brings a fresh twist to classic jazz tunes.',
      sheetMusic: 'https://example.com/sheet3.pdf',
      videoSrc: 'https://www.w3schools.com/html/movie.mp4',
      imageSrc: 'https://via.placeholder.com/150',
    },
    {
      name: 'Yale Glee Club',
      description: 'A renowned group known for our beautiful renditions of classical and contemporary music.',
      sheetMusic: 'https://example.com/sheet1.pdf', // Replace with actual links
      videoSrc: 'https://www.w3schools.com/html/movie.mp4', // Replace with actual video URL
      imageSrc: 'https://via.placeholder.com/150', // Image placeholder (not used now)
    },
    {
      name: 'Chamber Orchestra',
      description: 'A special arrangement for our spring concert showcasing classical music.',
      sheetMusic: 'https://example.com/sheet2.pdf',
      videoSrc: 'https://www.w3schools.com/html/movie.mp4',
      imageSrc: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jazz Ensemble',
      description: 'An ensemble that improvises and brings a fresh twist to classic jazz tunes.',
      sheetMusic: 'https://example.com/sheet3.pdf',
      videoSrc: 'https://www.w3schools.com/html/movie.mp4',
      imageSrc: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jazz Ensemble',
      description: 'An ensemble that improvises and brings a fresh twist to classic jazz tunes.',
      sheetMusic: 'https://example.com/sheet3.pdf',
      videoSrc: 'https://www.w3schools.com/html/movie.mp4',
      imageSrc: 'https://via.placeholder.com/150',
    },
  ];

  const [open, setOpen] = useState({});

  const toggleOpen = (index) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [index]: !prevOpen[index],
    }));
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header Section */}
      <div
        style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        <h1>Sounds of the Encampment</h1>
        <p>Something: Reconstructing the ambient sounds—chants, songs, and performances of the encampment</p>
      </div>

      {/* Cards Section */}
      <div className="container" style={{ flex: 1 }}>
        {groups.map((group, index) => (
          <Card key={index} style={{ marginBottom: '20px' }}>
            {/* Card Header */}
            <Card.Header>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src={group.imageSrc}
                    alt={`${group.name} logo`}
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      marginRight: '15px',
                    }}
                  />
                  <h5>{group.name}</h5>
                </div>
                <Button
                  variant="link"
                  onClick={() => toggleOpen(index)}
                  aria-expanded={open[index]}
                >
                  {open[index] ? 'Hide Details' : 'Show Details'}
                </Button>
              </div>
            </Card.Header>

            {/* Card Body */}
            <Collapse in={open[index]}>
              <Card.Body>
                <div
                  style={{
                    display: 'flex',
                    gap: '20px',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {/* Left Side - Video with Group Info (without image) */}
                  <div
                    style={{
                      flex: '1',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      height: '100%',
                    }}
                  >
                    <h5>{group.name}</h5>
                    <p>{group.description}</p>
                    <video
                      src={group.videoSrc}
                      controls
                      style={{
                        width: '100%',
                        maxHeight: '300px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                      }}
                    />
                  </div>

                  {/* Right Side - PDF Sheet Music */}
                  <div
                    style={{
                      flex: '1',
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '8px',
                    }}
                  >
                    <iframe
                      src={group.sheetMusic}
                      title={`${group.name} Sheet Music`}
                      style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        borderRadius: '8px',
                      }}
                    />
                  </div>
                </div>
              </Card.Body>
            </Collapse>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Music;

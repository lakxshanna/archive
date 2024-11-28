import React, { useState } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';

const Music = () => {
  const groups = [
    {
      name: 'Yale Glee Club',
      description: 'A renowned group known for our beautiful renditions of classical and contemporary music.',
      sheetMusic: 'https://example.com/sheet1.pdf',
      videoSrc: 'https://www.w3schools.com/html/movie.mp4',
      imageSrc: 'https://via.placeholder.com/150',
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
      sheetMusic: 'https://example.com/sheet1.pdf',
      videoSrc: 'https://www.w3schools.com/html/movie.mp4',
      imageSrc: 'https://via.placeholder.com/150',
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
  ];

  const [open, setOpen] = useState({});

  const toggleOpen = (index) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [index]: !prevOpen[index],
    }));
  };

  return (
    <div>
      <h1>Sounds of the Encampment</h1>
      <p>Reconstructing the ambient sounds—chants, songs, and performances of the encampment</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {groups.map((group, index) => (
          <Card
            key={index}
            style={{ overflow: 'hidden', transition: 'height 0.3s ease-in-out' }}
          >
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
            <Collapse in={open[index]}>
              <Card.Body>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
                  <div style={{ flex: '1' }}>
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
                  <div style={{ flex: '1' }}>
                    <iframe
                      src={group.sheetMusic}
                      title={`${group.name} Sheet Music`}
                      style={{
                        width: '100%',
                        height: '300px',
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

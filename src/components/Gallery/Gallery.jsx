// used John's code from lab demo as a template
import React from 'react';

import HornedBeast from '../HornedBeast/HornedBeast.jsx';
import images from '../../assets/data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// used ChatGPT to write this function
// used ChatGPT to modify this code to display images in 3 columns that dynamically render
function Gallery() {
  
  return (
    <Container fluid>
      <Row xs={1} sm={2} md={3} lg={3} xl={3}>
        {images.map((image) => (
          <Col key={image._id} className="mb-4">
            <HornedBeast
              title={image.title}
              image_url={image.image_url}
              description={image.description}
              keyword={image.keyword}
              horns={image.horns}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;

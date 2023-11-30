import React from 'react';
import HornedBeast from '../HornedBeast/HornedBeast.jsx';
import images from '../../assets/data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// used ChatGPT to write this function	function Gallery({ onBeastClick }) {
// used ChatGPT to modify this code to display images in 3 columns that dynamically render
function Gallery({ onBeastClick }) {
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
              onBeastClick={() => onBeastClick(image.title, image.image_url, image.description)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;

// used John's code from lab demo as a template
// used ChatGPT to write the code to keep track of state
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// used ChatGPT to determine how to combine h2, img and p tag in one div
// used ChatGPT to write the props.title, img src, and description
// used ChatGPT to write container fluid and to style images to 10% width
function HornedBeast(props) {
  // Initialize the state variable for favorites
  const [favorites, setFavorites] = useState(0);

  // Function to handle the favorite button click
  const handleFavoriteClick = () => {
    // Update the favorites count when the button is clicked
    setFavorites(prevFavorites => prevFavorites + 1);
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <div>
            <h2>{props.title}</h2>
            <div onClick={handleFavoriteClick} style={{ cursor: 'pointer' }}>
              <img
                src={props.image_url}
                alt={props.title}
                className="img-fluid"
                style={{ width: '10%', height: 'auto' }}
              />
            </div>
            <p>{props.description}</p>
            <p>
              <FaHeart /> {favorites} Favorites
            </p>
          </div>
        </Col>
        
      </Row>
    </Container>
  );
}

export default HornedBeast;
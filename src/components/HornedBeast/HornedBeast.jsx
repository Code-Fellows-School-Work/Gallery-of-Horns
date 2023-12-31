// used John's code from lab demo as a template	
// used ChatGPT to write the code to keep track of state
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

// used ChatGPT to determine how to combine h2, img and p tag in one div
// used ChatGPT to write the props.title, img src, and description	
// used ChatGPT to write container fluid and to style images to 10% width	
// used ChatGPT to troubleshoot how to display images in 3 columns and dynamically render based on screen size
function HornedBeast({ title, image_url, description, onBeastClick }) {
  const [favorites, setFavorites] = useState(0);
  const handleFavoriteClick = () => {
    setFavorites((prevFavorites) => prevFavorites + 1);
  };

  return (
    <div className = "app-container">
      <Container>
        <Row>
          <Col sm={4}>
            <h2>{title}</h2>
            <div onClick={() => onBeastClick()} style={{ cursor: 'pointer' }}>
              <img 
                onClick={handleFavoriteClick}
                src={image_url}
                alt={title}
                className="img-fluid"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <p>{description}</p>
            <p>
              <FaHeart /> {favorites} Favorites
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

HornedBeast.propTypes = {
  title: PropTypes.bool.isRequired,
  onBeastClick: PropTypes.func.isRequired,
  image_url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
export default HornedBeast;

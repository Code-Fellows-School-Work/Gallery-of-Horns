import HornedBeast from '../HornedBeast/HornedBeast.jsx';
import images from '../../assets/data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

// used ChatGPT to write this function	function Gallery({ onBeastClick }) {
// used ChatGPT to modify this code to display images in 3 columns that dynamically render
// used ChatGPT to modify this code to handle the selectedHorn prop
function Gallery({ onBeastClick, selectedHorn }) {
  const filteredImages = selectedHorn
    ? images.filter(image => image.horns === parseInt(selectedHorn, 10))
    : images;
  return (
    <Container fluid>
      <Row xs={1} sm={2} md={3} lg={3} xl={3}>
        {filteredImages.map((image) => (
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

Gallery.propTypes = {
  onBeastClick: PropTypes.func.isRequired,
  selectedHorn: PropTypes.func.isRequired
};
export default Gallery;

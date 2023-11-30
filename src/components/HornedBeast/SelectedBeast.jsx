import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// used ChatGPT to write the modal component and edited the remaining components to work with modal component 

function SelectedBeast({ show, handleClose, title, image_url, description }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={image_url}
          alt={title}
          className="img-fluid"
          style={{ width: '100%', height: 'auto' }}
        />
        <p>{description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Favorite
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

SelectedBeast.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SelectedBeast;
import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Footer from './components/Footer/Footer.jsx';
import SelectedBeast from './components/HornedBeast/SelectedBeast.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import '../src/assets/style.css';

function App() {
  // title is stated here and referenced in header prop in header component
  // content is stated here and referenced in footer prop in footer component
  // initializing null for these constants
  const [selectedBeast, setSelectedBeast] = useState(null);
  const [selectedHorn, setSelectedHorn] = useState(null);

  const handleBeastClick = (title, image_url, description) => {
    setSelectedBeast({ title, image_url, description });
  };

  const handleCloseModal = () => {
    setSelectedBeast(null);
  };

  // used ChatGPT to write the form code to include a dropdown menu that allows users to select 1 horn, 2 horns, 3 horns, and the gallery will update based on the selected horn value
  const handleHornChange = (event) => {
    setSelectedHorn(event.target.value);
  };

  return (
    <>
      <div className = "header-container">
        <Header title="Gallery of Horns"/>
      </div>
      <div className="filter-container">
        <Form inline>
          <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
            Filter by Horns:
          </Form.Label>
          <Form.Control
            as="select"
            className="custom-select my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
            onChange={handleHornChange}
            value={selectedHorn}
          >
            <option value="">Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Control>
        </Form>
      </div>
      <div className = "gallery-container">
        <Gallery onBeastClick={handleBeastClick} selectedHorn={selectedHorn} />
      </div>
      <div className = "footer-container">
        <Footer content="&copy; 2023 Errol Vidad" />
      </div>

      {selectedBeast && (
        <SelectedBeast
          show={!!selectedBeast}
          handleClose={handleCloseModal}
          {...selectedBeast}
        />
      )}
    </>
  );
}

export default App;

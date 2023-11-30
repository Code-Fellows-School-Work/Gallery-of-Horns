import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Footer from './components/Footer/Footer.jsx';
import SelectedBeast from './components/HornedBeast/SelectedBeast.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedBeast, setSelectedBeast] = useState(null);

  const handleBeastClick = (title, image_url, description) => {
    setSelectedBeast({ title, image_url, description });
  };

  const handleCloseModal = () => {
    setSelectedBeast(null);
  };

  return (
    <>
      <Header title="Gallery of Horns" />
      <Gallery onBeastClick={handleBeastClick} />
      <Footer content="&copy; 2023 Errol Vidad" />

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

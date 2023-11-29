import React from 'react'

import Header from './components/Header/Header.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
// title is stated here and referenced in header prop in header component
// content is stated here and referenced in footer prop in footer component
  return (
    <>
      <Header title="Gallery of Horns" />
      <Gallery />
      <Footer content="&copy; 2023 Errol Vidad"/>
    </>
  )

}

export default App;

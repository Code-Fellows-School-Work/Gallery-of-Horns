// used John's code from lab demo as a template
import React from 'react';

import HornedBeast from '../HornedBeast/HornedBeast.jsx';
import images from '../../assets/data.json';

// used ChatGPT to write this function
function Gallery() {
  return (
    <div>
    {images.map((image) => (
      <HornedBeast
        key={image._id}
        title={image.title}
        image_url={image.image_url}
        description={image.description}
        keyword={image.keyword}
        horns={image.horns}
      />
    ))}
  </div>
  )
}

export default Gallery;
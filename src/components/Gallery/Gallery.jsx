// used John's code from lab demo as a template
import React from 'react';

// import HornedBeast from '/home/evidad/codefellows/courses/code-301/Gallery of Horns/src/components/HornedBeast/HornedBeast.jsx';
// import images from '/home/evidad/codefellows/courses/code-301/Gallery of Horns/src/assets/data.json';

import HornedBeast from '../HornedBeast.jsx';
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
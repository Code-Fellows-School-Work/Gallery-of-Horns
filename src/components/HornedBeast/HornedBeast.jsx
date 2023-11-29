// used John's code from lab demo as a template
import React from 'react';

// used ChatGPT to determine how to combine h2, img and p tag in one div
// used ChatGPT to write the props.title, img src, and description
function HornedBeast(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.image_url} />
      <p>{props.description}</p>
    </div>
  )
}

export default HornedBeast;
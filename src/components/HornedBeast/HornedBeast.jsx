// used John's code from lab demo as a template
import React from 'react';

// used ChatGPT to determine how to combine h2, img and p tag in one div
function HornedBeast(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}

export default HornedBeast;
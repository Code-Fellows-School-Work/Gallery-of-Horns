// used John's code from lab demo as a template
// used ChatGPT to write the code to keep track of state
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

// used ChatGPT to determine how to combine h2, img and p tag in one div
// used ChatGPT to write the props.title, img src, and description
function HornedBeast(props) {
  // Initialize the state variable for favorites
  const [favorites, setFavorites] = useState(0);

  // Function to handle the favorite button click
  const handleFavoriteClick = () => {
    // Update the favorites count when the button is clicked
    setFavorites(prevFavorites => prevFavorites + 1);
  };

  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.image_url} alt={props.title} />
      <p>{props.description}</p>
      <p>
        <button onClick={handleFavoriteClick}>
          <FaHeart /> 
        </button>
        <span> {favorites}</span>
      </p>
    </div>
  );
}

export default HornedBeast;
// used John's code from lab demo as a template
// used ChatGPT to write the code to keep track of state
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './SelectedBeast';

// used ChatGPT to determine how to combine h2, img and p tag in one div
// used ChatGPT to write the props.title, img src, and description
// used ChatGPT to write container fluid and to style images to 10% width
// used ChatGPT to troubleshoot how to display images in 3 columns and dynamically render based on screen size
function HornedBeast(props) {
  const [favorites, setFavorites] = useState(0);
  const handleFavoriteClick = () => {
    setFavorites(prevFavorites => prevFavorites + 1);
  };

  return (
    <Container>
      <Row>
        <Col sm={4}><h2>{props.title}</h2>
            <SelectedBeast />
             <div onClick={handleFavoriteClick} style={{ cursor: 'pointer' }}>
               <img
                src={props.image_url}
                alt={props.title}
                className="img-fluid"
                style={{ width: '75%', height: 'auto' }}
              />
            </div>
            <p>{props.description}</p>
            <p>
              <FaHeart /> {favorites} Favorites
            </p></Col>
      </Row>
    </Container>
  );
}
//   return (
//     <Container fluid>
//       <Row>
//         <Col xs={12} sm={6} md={4}>
//             <h2>{props.title}</h2>
//             <div onClick={handleFavoriteClick} style={{ cursor: 'pointer' }}>
//               <img
//                 src={props.image_url}
//                 alt={props.title}
//                 className="img-fluid"
//                 style={{ width: '10%', height: 'auto' }}
//               />
//             </div>
//             <p>{props.description}</p>
//             <p>
//               <FaHeart /> {favorites} Favorites
//             </p>
//         </Col>
//       </Row>
//     </Container>

    
//   );
// }

export default HornedBeast;
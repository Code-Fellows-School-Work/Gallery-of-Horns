// used John's code from lab demo as a template
import PropTypes from 'prop-types';

function Footer(props) {
  return (
    <footer>
      {props.content}
    </footer>
  )
}
Footer.propTypes = {
  content: PropTypes.bool.isRequired
};
export default Footer;
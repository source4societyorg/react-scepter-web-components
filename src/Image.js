import React from 'react';
import PropTypes from 'prop-types';
const WebImage = ({ source, alt, className }) => <img src={source} alt={alt} className={className} />;
WebImage.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};
WebImage.defaultProps = {
  className: '',
};
export default WebImage;

import React from 'react';
import PropTypes from 'prop-types';
const WebParagraph = ({ children, className, ...rest }) => <p className={className} {...rest}>{children}</p>;
WebParagraph.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
WebParagraph.defaultProps = {
  className: '',
};
export default WebParagraph;

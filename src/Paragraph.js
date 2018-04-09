import React from 'react';
import PropTypes from 'prop-types';
const WebParagraph = ({ children, ...rest }) => <p {...rest}>{children}</p>;
WebParagraph.propTypes = {
  children: PropTypes.any,
};
WebParagraph.defaultProps = {};
export default WebParagraph;

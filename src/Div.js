import React from 'react';
import PropTypes from 'prop-types';
export const WebDiv = ({ children, className }) => <div className={className}>{children}</div>;
WebDiv.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
WebDiv.defaultProps = {
  className: '',
};
export default WebDiv;

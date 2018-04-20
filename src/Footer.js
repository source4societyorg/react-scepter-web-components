import React from 'react';
import PropTypes from 'prop-types';
export const WebFooter = ({ children, className }) => <footer className={className}>{children}</footer>;
WebFooter.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
WebFooter.defaultProps = {
  className: '',
};
export default WebFooter;

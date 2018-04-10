import React from 'react';
import PropTypes from 'prop-types';
const WebView = ({ children, className }) => <section className={className}>{children}</section>;
WebView.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
WebView.defaultProps = {
  className: '',
};
export default WebView;

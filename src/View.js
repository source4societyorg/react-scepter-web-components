import React from 'react';
import PropTypes from 'prop-types';
const WebView = ({ children }) => <section>{children}</section>;
WebView.propTypes = {
  children: PropTypes.any,
};
WebView.defaultProps = {};
export default WebView;

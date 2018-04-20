import React from 'react';
import PropTypes from 'prop-types';
export const WebNavigation = ({ children, className }) => <navigation className={className}>{children}</navigation>;
WebNavigation.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
WebNavigation.defaultProps = {
  className: '',
};
export default WebNavigation;

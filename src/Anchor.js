import React from 'react';
import PropTypes from 'prop-types';
export const WebAnchor = ({ children, className, to, ...rest }) => <a className={className} href={to} {...rest}>{children}</a>;
WebAnchor.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
};
WebAnchor.defaultProps = {
  className: '',
};
export default WebAnchor;

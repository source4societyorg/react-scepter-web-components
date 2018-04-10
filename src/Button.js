import React from 'react';
import PropTypes from 'prop-types';

const WebButton = ({ children, className, onInteraction, ...rest }) => <button onClick={onInteraction} className={className} {...rest}>{children}</button>;
WebButton.propTypes = {
  children: PropTypes.any,
  onInteraction: PropTypes.func,
  className: PropTypes.string,
};
WebButton.defaultProps = {
  onInteraction: () => null,
  className: '',
};
export default WebButton;

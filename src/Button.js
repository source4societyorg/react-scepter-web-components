import React from 'react';
import PropTypes from 'prop-types';

const WebButton = ({ children, onInteraction, ...rest }) => <button onClick={onInteraction} {...rest}>{children}</button>;
WebButton.propTypes = {
  children: PropTypes.any,
  onInteraction: PropTypes.func,
};
WebButton.defaultProps = {
  onInteraction: () => null,
};
export default WebButton;

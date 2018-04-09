import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
export const WebHeader = ({ children, type, ...rest }) => {
  let element;
  switch (type) {
    case 'h2':
    case 'h3':
    case 'h4':
      element = styled(type);
      break;
    default:
      element = styled.h1``;
  }

  return <element type={type} {...rest}>{children}</element>;
};
WebHeader.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
};
WebHeader.defaultProps = {
  type: 'h1',
};
export default WebHeader;

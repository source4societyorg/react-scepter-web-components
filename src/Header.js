import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
export const WebHeader = ({ children, className, type, ...rest }) => {
  let HTag;
  switch (type) {
    case 'h2':
      HTag = styled.h2``;
      break;
    case 'h3':
      HTag = styled.h3``;
      break;
    case 'h4':
      HTag = styled.h4``;
      break;
    default:
      HTag = styled.h1``;
  }

  return <HTag className={className} type={type} {...rest}>{children}</HTag>;
};
WebHeader.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  className: PropTypes.string,
};
WebHeader.defaultProps = {
  type: 'h1',
  className: '',
};
export default WebHeader;

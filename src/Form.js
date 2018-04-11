import React from 'react';
import PropTypes from 'prop-types';
export const WebForm = ({ children, className, onSubmit, noValidate, formAttributes }) => <form className={className} onSubmit={onSubmit} noValidate={noValidate} {...formAttributes}>{children}</form>;
WebForm.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  noValidate: PropTypes.bool,
  formAttributes: PropTypes.object,
};
WebForm.defaultProps = {
  className: '',
  noValidate: true,
  formAttributes: [],
};
export default WebForm;

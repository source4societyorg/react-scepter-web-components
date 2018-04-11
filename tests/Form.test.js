import React from 'react';
import { shallow } from 'enzyme';
import PropTypes from 'prop-types';
import WebForm from '../src/Form';

test('propTypes are defined properly', () => {
  expect(WebForm.propTypes).toEqual({
    children: PropTypes.any,
    className: PropTypes.string,
    onSubmit: PropTypes.func,
    noValidate: PropTypes.bool,
    formAttributes: PropTypes.object,
  });
});

test('defaultProps are defined properly', () => {
  expect(WebForm.defaultProps).toEqual({
    className: '',
    noValidate: true,
    formAttributes: [],
  });
});

test('WebForm renders without problems', () => {
  const renderedComponent = shallow(<WebForm />);
  renderedComponent.render();
});

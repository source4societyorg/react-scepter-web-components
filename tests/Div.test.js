import React from 'react';
import { shallow } from 'enzyme';
import PropTypes from 'prop-types';
import WebDiv from '../src/Div';

test('propTypes are defined properly', () => {
  expect(WebDiv.propTypes).toEqual({
    children: PropTypes.any,
    className: PropTypes.string,
  });
});

test('defaultProps are defined properly', () => {
  expect(WebDiv.defaultProps).toEqual({
    className: '',
  });
});

test('WebDiv renders without problems', () => {
  const renderedComponent = shallow(<WebDiv />);
  renderedComponent.render();
});

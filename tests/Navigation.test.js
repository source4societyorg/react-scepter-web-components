import React from 'react';
import { shallow } from 'enzyme';
import PropTypes from 'prop-types';
import WebNavigation from '../src/Navigation';

test('propTypes are defined properly', () => {
  expect(WebNavigation.propTypes).toEqual({
    children: PropTypes.any,
    className: PropTypes.string,
  });
});

test('defaultProps are defined properly', () => {
  expect(WebNavigation.defaultProps).toEqual({
    className: '',
  });
});

test('WebNavigation renders without problems', () => {
  const renderedComponent = shallow(<WebNavigation />);
  renderedComponent.render();
});

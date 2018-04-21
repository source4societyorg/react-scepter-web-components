import React from 'react';
import { shallow } from 'enzyme';
import PropTypes from 'prop-types';
import WebAnchor from '../src/Anchor';

test('propTypes are defined properly', () => {
  expect(WebAnchor.propTypes).toEqual({
    children: PropTypes.any,
    className: PropTypes.string,
    to: PropTypes.string.isRequired,
  });
});

test('defaultProps are defined properly', () => {
  expect(WebAnchor.defaultProps).toEqual({
    className: '',
  });
});

test('WebAnchor renders without problems', () => {
  const renderedComponent = shallow(<WebAnchor />);
  renderedComponent.render();
});

import React from 'react';
import { shallow } from 'enzyme';
import PropTypes from 'prop-types';
import WebButton from '../src/Button';

test('propTypes are defined properly', () => {
  expect(WebButton.propTypes).toEqual({
    children: PropTypes.any,
    onInteraction: PropTypes.func,
    className: PropTypes.string,
  });
});

test('defaultProps are defined properly', () => {
  expect(WebButton.defaultProps.onInteraction()).toBeNull();
  expect(WebButton.defaultProps.className).toEqual('');
});

test('WebButton renders without problems', () => {
  const renderedComponent = shallow(<WebButton>Mock Label</WebButton>);
  renderedComponent.render();
});

import React from 'react';
import { shallow } from 'enzyme';
import PropTypes from 'prop-types';
import WebView from '../src/View';

test('propTypes is defined properly', () => {
  expect(WebView.propTypes).toEqual({
    children: PropTypes.any,
  });
});

test('defaultProps is defined properly', () => {
  expect(WebView.defaultProps).toEqual({});
});

test('WebView component renders without problems', () => {
  const renderedComponent = shallow(<WebView />);
  renderedComponent.render();
});

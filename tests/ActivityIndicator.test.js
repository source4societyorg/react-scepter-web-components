import React from 'react';
import { shallow } from 'enzyme';
import WebActivityIndicator from '../src/ActivityIndicator';

test('propTypes are defined properly', () => {
  expect(WebActivityIndicator.propTypes).toEqual({});
});

test('defaultProps are defined properly', () => {
  expect(WebActivityIndicator.defaultProps).toEqual({});
});

test('WebActivityIndicator renders without problems', () => {
  const renderedComponent = shallow(<WebActivityIndicator />);
  renderedComponent.render();
});

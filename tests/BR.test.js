import React from 'react';
import { shallow } from 'enzyme';
import WebBR from '../src/BR';

test('propTypes are defined properly', () => {
  expect(WebBR.propTypes).toEqual({});
});

test('defaultProps are defined properly', () => {
  expect(WebBR.defaultProps).toEqual({});
});

test('WebBR renders without problems', () => {
  const renderedComponent = shallow(<WebBR />);
  renderedComponent.render();
});

import React from 'react';
import { shallow } from 'enzyme';
import PropTypes from 'prop-types';
import WebHeader from '../src/Header';

test('propTypes are defined properly', () => {
  expect(WebHeader.propTypes).toEqual({
    children: PropTypes.any,
    type: PropTypes.string,
  });
});

test('defaultProps are defined properly', () => {
  expect(WebHeader.defaultProps).toEqual({
    type: 'h1',
  });
});

test('WebHeader renders without problems', () => {
  const renderedComponent = shallow(<WebHeader />);
  renderedComponent.render();
});

test('WebHeader return element based on type prop', () => {
  WebHeader({ type: 'h1' });
  WebHeader({ type: 'h2' });
  WebHeader({ type: 'h3' });
  WebHeader({ type: 'h4' });
  WebHeader({ type: 'garbage' });
  WebHeader({});
});

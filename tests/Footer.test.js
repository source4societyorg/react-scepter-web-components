import React from 'react';
import { shallow } from 'enzyme';
import PropTypes from 'prop-types';
import WebFooter from '../src/Footer';

test('propTypes are defined properly', () => {
  expect(WebFooter.propTypes).toEqual({
    children: PropTypes.any,
    className: PropTypes.string,
  });
});

test('defaultProps are defined properly', () => {
  expect(WebFooter.defaultProps).toEqual({
    className: '',
  });
});

test('WebFooter renders without problems', () => {
  const renderedComponent = shallow(<WebFooter />);
  renderedComponent.render();
});

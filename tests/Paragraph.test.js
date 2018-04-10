import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import WebParagraph from '../src/Paragraph';

test('propTypes are defined properly', () => {
  expect(WebParagraph.propTypes).toEqual({
    children: PropTypes.any,
    className: PropTypes.string,
  });
});

test('defaultProps are defined properly', () => {
  expect(WebParagraph.defaultProps).toEqual({
    className: '',
  });
});

test('WebParagraph renders without problems', () => {
  const renderedComponent = shallow(<WebParagraph />);
  renderedComponent.render();
});

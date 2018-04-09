import React from 'react';
import { shallow } from 'enzyme';
import PropTypes from 'prop-types';
import WebImage from '../src/Image';

test('propTypes are defined properly', () => {
  expect(WebImage.propTypes).toEqual({
    source: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
  });
});

test('defaultProps are defined properly', () => {
  expect(WebImage.defaultProps).toEqual({
    className: '',
  });
});

test('WebButton renders without problems', () => {
  const renderedComponent = shallow(<WebImage source={'mockSource'} alt={'mockAlt'} />);
  renderedComponent.render();
});

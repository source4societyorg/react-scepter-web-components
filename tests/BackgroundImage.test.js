import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import WebBackgroundImage from '../src/BackgroundImage';

test('propTypes are defined properly', () => {
  expect(WebBackgroundImage.propTypes).toEqual({
    source: PropTypes.string.isRequired,
    className: PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundPosition: PropTypes.string,
    backgroundSize: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundAttachment: PropTypes.string,
    backgroundOrigin: PropTypes.string,
    backgroundClip: PropTypes.string,
    sourceUrl: PropTypes.bool,
  });
});

test('defaultProps are defined properly', () => {
  expect(WebBackgroundImage.defaultProps).toEqual({
    className: '',
    backgroundColor: 'white',
    backgroundPosition: '0% 0%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'scroll',
    backgroundOrigin: 'padding-box',
    backgroundClip: 'border-box',
    sourceUrl: true,
  });
});

test('WebBackgroundImage renders without problems', () => {
  let renderedComponent = shallow(<WebBackgroundImage />);
  renderedComponent.render();
  renderedComponent = shallow(<WebBackgroundImage sourceUrl={false} />);
  renderedComponent.render();
});

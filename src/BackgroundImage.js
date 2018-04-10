import styled from 'styled-components';
import PropTypes from 'prop-types';
import WebDiv from './Div';

const WebBackgroundImage = styled(WebDiv)`
  background-image: ${(props) => props.sourceUrl ? `url('${props.source}')` : `'${props.sourceUrl}'`};
  background-size: '${(props) => props.backgroundSize}';
  background-color: '${(props) => props.backgroundColor}';
  background-position: '${(props) => props.backgroundPosition}';
  background-repeat: '${(props) => props.backgroundRepeat}';
  background-attachment: '${(props) => props.backgroundAttachment}';
  background-origin: '${(props) => props.backgroundOrigin}';
  background-clip: '${(props) => props.backgroundClip}';
`;

WebBackgroundImage.propTypes = {
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
};
WebBackgroundImage.defaultProps = {
  className: '',
  backgroundColor: 'white',
  backgroundPosition: '0% 0%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'scroll',
  backgroundOrigin: 'padding-box',
  backgroundClip: 'border-box',
  sourceUrl: true,
};

export default WebBackgroundImage;

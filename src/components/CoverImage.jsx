import React from 'react';
import PropTypes from 'prop-types';

/**
 * Create YouTube URL for embed.
 * @param {string} id YouTube video ID.
 */
const youtubeUrl = id => `https://www.youtube.com/embed/${id}?showinfo=0`;

/**
 * @typedef Props
 * @property {string} [alt]
 * @property {?string} [sizes]
 * @property {?string} [srcSet]
 * @property {?string} [src]
 * @property {?string} [title]
 * @property {?string} [youtube] YouTube ID.
 */

/**
 * Common image for hero or thumbnail component for LP.
 * @extends React.Component<Props>
 */
export default class extends React.Component {
  /**
   * Default Properties.
   * @type {Props}
   */
  static defaultProps = {
    alt: '',
    sizes: undefined,
    srcSet: undefined,
    src: '',
    title: undefined,
    youtube: '',
  };

  /** Property types. */
  static propTypes = {
    alt: PropTypes.string,
    sizes: PropTypes.string,
    srcSet: PropTypes.string,
    src: PropTypes.string,
    title: PropTypes.string,
    youtube: PropTypes.string,
  };

  /** Whether should require redraw. */
  shouldComponentUpdate = () => false;

  /** Create image elements. */
  renderImage = () => {
    const {
      alt, sizes, src, srcSet, title,
    } = this.props;
    return (<img
      alt={alt}
      {...{
        sizes, src, srcSet, title,
      }}
    />);
  };

  /** Create YouTube(iframe) elements. */
  renderYouTube = () => {
    const { youtube, title } = this.props;
    return (<iframe
      className="video"
      src={youtubeUrl(youtube)}
      title={title}
      allow="encrypted-media"
      allowFullScreen="allowFullScreen"
    />);
  };

  /** Create rendered view elements. */
  render = () => {
    const { src, youtube } = this.props;
    if (!(src || youtube)) { return null; }
    const element = youtube ? this.renderYouTube() : this.renderImage();
    return <figure className="image is-16by9">{element}</figure>;
  }
}

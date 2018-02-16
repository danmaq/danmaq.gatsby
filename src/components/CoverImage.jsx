import React from 'react';
import PropTypes from 'prop-types';

/**
 * Create YouTube URL for embed.
 * @param {string} id YouTube video ID.
 */
const youtubeUrl = id => `https://www.youtube.com/embed/${id}?showinfo=0`;

/** Common image for hero or thumbnail component for LP. */
export default class extends React.Component {
  /** Default Properties. */
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
  imageElement = () => {
    const {
      alt, sizes, src, srcSet, title,
    } = this.props;
    const attrs = {
      sizes, src, srcSet, title,
    };
    return <img alt={alt} {...attrs} />;
  };

  /** Create YouTube(iframe) elements. */
  youtubeElement = () => {
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
    const element = youtube ? this.youtubeElement() : this.imageElement();
    return <figure className="image is-16by9">{element}</figure>;
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import { Column, Image } from 'bloomer';

/** Common achievement icon component for LP. */
export default class extends React.Component {
  /** Property types. */
  static propTypes = {
    caption: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

  /** Whether should require redraw. */
  shouldComponentUpdate = () => false;

  /** Create rendered view elements. */
  render = () => {
    const { caption, image } = this.props;
    return (
      <Column isSize="1/3">
        <Image isRatio="square" src={image} title={caption} />
      </Column>);
  };
}

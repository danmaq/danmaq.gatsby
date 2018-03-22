import React from 'react';
import PropTypes from 'prop-types';

/**
 * @typedef {object} SizePair
 * @property {string} wrap
 * @property {string} icon
 */

/**
 * Table of size definition.
 * @type {SizePair[]}
 */
const sizeTable = [
  { wrap: 'is-small', icon: '' },
  { wrap: '', icon: 'fa-lg' },
  { wrap: 'is-medium', icon: 'fa-2x' },
  { wrap: 'is-large', icon: 'fa-3x' },
  { wrap: 'is-large', icon: 'fa-4x' },
];

/**
 * @typedef Props
 * @property {string} i
 * @property {0|1|2|3|4} size
 */

/**
 * Common icon component.
 *
 * Since `bloomer.Icon` outputs HTML structure different
 * from Bulma's specification, use this alternative class.
 * @extends React.Component<Props>
 */
export default class extends React.Component {
  /**
   * Default properties.
   * @type {Props}
   */
  static defaultProps = { size: 0 };

  /** Property types. */
  static propTypes = {
    i: PropTypes.string.isRequired,
    size: PropTypes.oneOf([0, 1, 2, 3, 4]),
  };

  /** Whether should require redraw. */
  shouldComponentUpdate = () => false;

  /** Create rendered view elements. */
  render = () => {
    const { i, size } = this.props;
    const { wrap, icon } = sizeTable[size];
    return (
      <span className={`icon ${wrap}`}>
        <i className={`fa fa-${i} ${icon}`} />
      </span>);
  };
}

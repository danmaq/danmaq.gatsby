import React from 'react';
import PropTypes from 'prop-types';

import Core from './Core';

/**
 * @typedef {object} Header.state
 * @property {number} position
 * @property {number} reversed
 */

/** Header component. */
export default class extends React.Component {
  /** Default properties. */
  static defaultProps = {
    children: null,
    className: 'is-light is-fixed-top',
    pathContext: {},
    style: {},
  };

  /** Property types. */
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    pathContext: PropTypes.object,
    style: PropTypes.object,
  };

  /**
   * Current state.
   * @type {Header.state}
   */
  state = { position: 0, reversed: 0 };

  /** Invoked just after mounting this component. */
  componentDidMount = () =>
    global.window.addEventListener('scroll', this._onScroll);

  /** Whether should require redraw. */
  shouldComponentUpdate = (nextProps, nextState) =>
    this.state.position !== nextState.position ||
    this.state.reversed !== nextState.reversed;

  /** Invoked just before unmounting this component. */
  componentWillUnmount = () =>
    global.window.removeEventListener('scroll', this._onScroll);

  /** Invoked when scrolling the screen. */
  _onScroll = () => {
    const { scrollY } = global.window;
    const { position: ppos, reversed: prev } = this.state;
    const position = scrollY * 0.3333;
    if (ppos !== position) {
      const reversed = ppos > position ? position : prev;
      this.setState(p => ({ ...p, position, reversed }));
    }
  };

  /** Create style. */
  _createStyle = () => {
    const { style } = this.props;
    const { position, reversed } = this.state;
    return {
      ...style,
      transform: `translateY(${-(position - reversed)}px)`,
    };
  };

  /** Create rendered view elements. */
  render = () => <Core {...this.props} style={this._createStyle()} />;
}

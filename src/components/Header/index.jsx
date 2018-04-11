import React from 'react';
import PropTypes from 'prop-types';

import Core from './Core';

import '../typedef';

/**
 * @typedef Props
 * @property {React.ReactNode} children
 * @property {string} className
 * @property {PathContext} pathContext
 * @property {*} style
 */

/**
 * @typedef {object} State
 * @property {number} position
 * @property {number} reversed
 */

/**
 * Header component.
 * @extends React.Component<object,State>
 */
export default class extends React.Component {
  /**
   * Default properties.
   * @type {Props}
   */
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
   * @type {State}
   */
  state = { position: 0, reversed: 0 };

  /** Invoked just after mounting this component. */
  componentDidMount = () =>
    global.window.addEventListener('scroll', this.windowOnScroll);

  /** Whether should require redraw. */
  shouldComponentUpdate = (nextProps, nextState) =>
    this.state.position !== nextState.position ||
    this.state.reversed !== nextState.reversed;

  /** Invoked just before unmounting this component. */
  componentWillUnmount = () =>
    global.window.removeEventListener('scroll', this.windowOnScroll);

  /** Invoked when scrolling the screen. */
  windowOnScroll = () => {
    const { position: ppos, reversed: prev } = this.state;
    const position = global.window.scrollY * 0.3333;
    if (ppos !== position) {
      const reversed = ppos > position ? position : prev;
      this.setState(p => ({ ...p, position, reversed }));
    }
  };

  /** Create style. */
  createStyle = () => {
    const { position, reversed } = this.state;
    return {
      ...this.props.style,
      transform: `translateY(${-(position - reversed)}px)`,
    };
  };

  /** Create rendered view elements. */
  render = () => <Core {...this.props} {...this.props.pathContext} style={this.createStyle()} />;
}

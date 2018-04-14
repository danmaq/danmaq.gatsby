import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby-link';
import { NavbarItem } from 'bloomer';
import classNames from 'classnames';

import Core from './Core';

/**
 * @typedef Props
 * @property {string} langKey
 * @property {string} path
 */

/**
 * @typedef {object} State
 * @property {boolean} expand
 */

/**
 * Header component.
 * @extends React.Component<Props,State>
 */
export default class extends React.Component {
  /**
    * Default properties.
    * @type {Props}
    */
  static defaultProps = { path: '' };

  /** Property types. */
  static propTypes = {
    langKey: PropTypes.string.isRequired,
    path: PropTypes.string,
  };

  /**
   * Current state.
   * @type {State}
   */
  state = { expand: true };

  /** Invoked just after mounting this component. */
  componentDidMount = () =>
    global.window.addEventListener('scroll', this.windowOnScroll);

  /** Whether should require redraw. */
  shouldComponentUpdate = (nextProps, nextState) =>
    this.state.expand !== nextState.expand;

  /** Invoked just before unmounting this component. */
  componentWillUnmount = () =>
    global.window.removeEventListener('scroll', this.windowOnScroll);

  /** Create CSS class name of header. */
  getClassNames = () => {
    const { expand } = this.state;
    return classNames(
      ({ 'dmq-navbar-expand is-black': expand }),
      ({ 'is-light': !expand }),
    );
  };

  /** Invoked when scrolling the screen. */
  windowOnScroll = () => {
    const expand = global.window.scrollY <= 200;
    if (this.state.expand !== expand) {
      this.setState(p => ({ ...p, expand }));
    }
  };

  /** Create rendered view elements. */
  render = () => {
    const { langKey, path } = this.props;
    return (
      <Core className={this.getClassNames()} {...{ langKey, path }}>
        <NavbarItem href="#works">Works</NavbarItem>
        <NavbarItem href="#about">About</NavbarItem>
        <NavbarItem href="#contact">Contact</NavbarItem>
        <NavbarItem href={withPrefix(`/${langKey}/blog`)}>Blog</NavbarItem>
      </Core>);
  };
}

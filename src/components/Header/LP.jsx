import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby-link';
import { NavbarItem } from 'bloomer';
import classNames from 'classnames';

import Core from './Core';

/**
 * @typedef {object} Header.state
 * @property {boolean} expand
 */

/** Header component. */
export default class extends React.Component {
  /** Property types. */
  static propTypes = { pathContext: PropTypes.object.isRequired };

  /**
   * Current state.
   * @type {Header.state}
   */
  state = { expand: true };

  /** Invoked just after mounting this component. */
  componentDidMount = () =>
    global.window.addEventListener('scroll', this._onScroll);

  /** Whether should require redraw. */
  shouldComponentUpdate = (nextProps, nextState) =>
    this.state.expand !== nextState.expand;

  /** Invoked just before unmounting this component. */
  componentWillUnmount = () =>
    global.window.removeEventListener('scroll', this._onScroll);

  /** Create CSS class name of header. */
  _className = () => {
    const { expand } = this.state;
    return classNames(
      ({ 'dmq-navbar-expand is-black': expand }),
      ({ 'is-light': !expand }),
    );
  };

  /** Invoked when scrolling the screen. */
  _onScroll = () => {
    const expand = global.window.scrollY <= 200;
    if (this.state.expand !== expand) {
      this.setState(p => ({ ...p, expand }));
    }
  };

  /** Create rendered view elements. */
  render = () => {
    const { pathContext } = this.props;
    return (
      <Core className={this._className()} pathContext={pathContext}>
        <NavbarItem href="#works">Works</NavbarItem>
        <NavbarItem href="#about">About</NavbarItem>
        <NavbarItem href="#contact">Contact</NavbarItem>
        <NavbarItem href={withPrefix(`/${pathContext.langKey}/blog`)}>Blog</NavbarItem>
      </Core>);
  };
}

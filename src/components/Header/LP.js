'use strict';

import React from 'react';
import { NavbarItem } from 'bloomer';
import classNames from 'classnames';

import Header from './';

/**
 * @typedef {object} Header.state
 * @property {boolean} expand
 */

/** Header component. */
export default class extends React.Component {
    /**
     * Current state.
     * @type {Header.state}
     */
    state = { expand: true };

    /** Invoked just after mounting this component. */
    componentDidMount =
        () => global.window.addEventListener('scroll', this._onScroll);

    /** Invoked just before unmounting this component. */
    componentWillUnmount =
        () => global.window.removeEventListener('scroll', this._onScroll);

    /** Create rendered view elements. */
    render =
        () =>
        <Header className={this._className()}>
            <NavbarItem href="#works">Works</NavbarItem>
            <NavbarItem href="#about">About</NavbarItem>
            <NavbarItem href="#contact">Contact</NavbarItem>
            <NavbarItem href="#blog">Blog</NavbarItem>
        </Header>;

    /** Create CSS class name of header. */
    _className =
        () =>
        (({ expand }) =>
            classNames(
                'is-fixed-top',
                ({ 'dmq-navbar-expand is-black': expand }),
                ({ 'is-light': !expand })
            ))(this.state);

    /** Invoked when scrolling the screen. */
    _onScroll =
        () => {
            const expand = global.window.scrollY <= 200;
            if (this.state.expand != expand) {
                this.setState(p => ({ ...p, expand }));
            }
        };
};
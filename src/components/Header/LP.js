'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby-link';
import { NavbarItem } from 'bloomer';
import classNames from 'classnames';

import Header from './';

/**
 * @typedef {object} Header.state
 * @property {boolean} expand
 */

/** Header component. */
export default class extends React.Component {
    /** Whether should require redraw. */
    shouldComponentUpdate =
        (nextProps, nextState) =>
        this.state.expand !== nextState.expand;

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
        (({ pathContext }) =>
            <Header className={this._className()} pathContext={pathContext}>
                <NavbarItem href="#works">Works</NavbarItem>
                <NavbarItem href="#about">About</NavbarItem>
                <NavbarItem href="#contact">Contact</NavbarItem>
                <NavbarItem href={withPrefix(`/${pathContext.langKey}/blog`)}>Blog</NavbarItem>
            </Header>
        )(this.props);

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

    /** Property types. */
    static propTypes = {
        pathContext: PropTypes.object.isRequired,
    };
};
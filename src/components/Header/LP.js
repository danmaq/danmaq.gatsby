'use strict';

import React from 'react';
import Link from 'gatsby-link';
import {
    Navbar,
    NavbarBrand,
    NavbarBurger,
    NavbarEnd,
    NavbarItem,
    NavbarMenu,
    NavbarStart,
} from 'bloomer';

import Icon from '~/src/components/Icon';

import LogoInv from '~/src/assets/logo/logoInv.svg';

/**
 * @typedef {object} Header.state
 * @property {boolean} active
 * @property {boolean} expand
 */

/** Header component. */
export default class extends React.Component {
    /**
     * Current state.
     * @type {Header.state}
     */
    state = { active: false, expand: true };

    /** Invoked just after mounting this component. */
    componentDidMount =
        () => global.window.addEventListener('scroll', this._onScroll);

    /** Invoked just before unmounting this component. */
    componentWillUnmount =
        () => global.window.removeEventListener('scroll', this._onScroll);

    /** Create rendered view elements. */
    render =
        () =>
        (({ active }) =>
            <Navbar className={this._className()}
                    role="header"
                    isTransparent>
                <NavbarBrand>
                    <NavbarItem>
                        <Link to="/#">
                            <img alt="danmaq"
                                src={LogoInv}
                                width="282"
                                height="100" />
                        </Link>
                    </NavbarItem>
                    <NavbarBurger isActive={active}
                                  onClick={() => this.setState(p => ({...p, active: !active }))} />
                </NavbarBrand>
                <NavbarMenu isActive={active} role="navigation">
                    <NavbarStart>
                        <NavbarItem href="#works">Works</NavbarItem>
                        <NavbarItem href="#about">About</NavbarItem>
                        <NavbarItem href="#contact">Contact</NavbarItem>
                        <NavbarItem href="#blog">Blog</NavbarItem>
                    </NavbarStart>
                    <NavbarEnd>
                        <NavbarItem href="https://github.com/danmaq"
                                    target="_blank">
                            <Icon i="github" size={2} />
                        </NavbarItem>
                        <NavbarItem href="https://twitter.com/danmaq"
                                    target="_blank">
                            <Icon i="twitter" size={2} />
                        </NavbarItem>
                    </NavbarEnd>
                </NavbarMenu>
            </Navbar>
        )(this.state);

    /** Create CSS class name of header. */
    _className =
        () =>
        (({ expand }) =>
            `is-fixed-top ${expand ? 'dmq-navbar-expand is-black' : 'is-light'}`)(
            this.state);

    /** Invoked when scrolling the screen. */
    _onScroll =
        () => {
            const expand = global.window.scrollY <= 200;
            if (this.state.expand != expand) {
                this.setState(p => ({ ...p, expand }));
            }
        };
};
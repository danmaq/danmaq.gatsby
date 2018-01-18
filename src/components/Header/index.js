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
 */

/** Header component. */
export default class extends React.Component {
    /**
     * Current state.
     * @type {Header.state}
     */
    state = { active: false };

    /** Create rendered view elements. */
    render =
        () =>
        (({ active }) =>
            <Navbar className="is-dark is-fixed-top"
                    role="header"
                    isTransparent>
                <NavbarBrand>
                    <NavbarItem>
                        <img alt="danmaq"
                             src={LogoInv}
                             width="282"
                             height="100" />
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
};
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
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
        (({ children, className }, { active }) =>
            <Navbar className={className} role="header" isTransparent>
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
                                  onClick={this._onClickedBurger} />
                </NavbarBrand>
                <NavbarMenu isActive={active} role="navigation">
                    <NavbarStart>{children}</NavbarStart>
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
        )(this.props, this.state);

    /** Invoked on burger menu button has clicked. */
    _onClickedBurger =
        () =>
        (({ active }) => this.setState(p => ({ ...p, active: !active })))(
            this.state);

    /** Property types. */
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
    };

    /** Default properties. */
    static defaultProps = { className: 'is-light' };
};
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link, { withPrefix } from 'gatsby-link';
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
        (({ children, className, pathContext: { slug } }, { active }) =>
            <Navbar className={className} role="header" isTransparent>
                {this._alternative()}
                <NavbarBrand>
                    <NavbarItem>
                        <Link to={slug ? slug.replace(/\/(en|ja)\/.+/, '/$1/') : '/'}>
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
                        {this._toggleLanguage()}
                        <NavbarItem href="https://github.com/danmaq"
                                    target="_blank">
                            <Icon i="github" size={2} />
                        </NavbarItem>
                        <NavbarItem href="https://twitter.com/danmaq"
                                    herflang="ja"
                                    target="_blank">
                            <Icon i="twitter" size={2} />
                        </NavbarItem>
                    </NavbarEnd>
                </NavbarMenu>
            </Navbar>
        )(this.props, this.state);

    _alternative =
        () => {
            const { pathContext: { langKey } } = this.props;
            if (!langKey) { return undefined; }
            const lang = /^en/.test(langKey) ? 'en' : 'ja';
            const alt = /^en/.test(langKey) ? 'ja' : 'en';
            const result =
                <Helmet>
                    <html lang={lang} />
                    <link href={withPrefix(this._replaceSlugLang(`/${alt}/`))}
                          rel="alternate"
                          hrefLang={alt} />
                </Helmet>
            return result;
        }

    _toggleLanguage =
        () => {
            const { pathContext: { langKey } } = this.props;
            if (!langKey) { return undefined; }
            const lang = /^en/.test(langKey) ? 'ja' : 'en';
            const result =
                <NavbarItem href={withPrefix(this._replaceSlugLang(`/${lang}/`))}
                            rel="alternate"
                            hrefLang={lang}>
                    <Icon i="language" size={2} />
                    {/^en/.test(langKey) ? '🇬🇧▶︎🇯🇵' : '🇯🇵▶︎🇬🇧'}
                </NavbarItem>;
            return result;
        };

    _replaceSlugLang =
        lang => {
            const { pathContext: { slug, path } } = this.props;
            const sp = path || slug;
            return !sp ? lang : sp.replace(/^\/(ja|en)\//, lang)
        };

    /** Invoked on burger menu button has clicked. */
    _onClickedBurger =
        () =>
        (({ active }) => this.setState(p => ({ ...p, active: !active })))(
            this.state);

    /** Property types. */
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        pathContext: PropTypes.object,
    };

    /** Default properties. */
    static defaultProps = {
        className: 'is-light',
        pathContext: {}
    };
};
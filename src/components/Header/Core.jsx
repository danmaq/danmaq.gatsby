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

import Icon from '../Icon';

import LogoInv from '../../assets/logo/logoInv.svg';

/**
 * @typedef Props
 * @property {React.ReactNode} children
 * @property {string} className
 * @property {string} langKey
 * @property {string} path
 * @property {*} style
 */

/**
 * @typedef State
 * @property {boolean} active
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
  static defaultProps = {
    children: null,
    className: 'is-light',
    path: '',
    style: {},
  };

  /** Property types. */
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    langKey: PropTypes.string.isRequired,
    path: PropTypes.string,
    style: PropTypes.object,
  };

  /**
   * Current state.
   * @type {State}
   */
  state = { active: false };

  alternateNavigation = () => {
    const { langKey } = this.props;
    if (!langKey) { return undefined; }
    const lang = /^en/.test(langKey) ? 'en' : 'ja';
    const alt = /^en/.test(langKey) ? 'ja' : 'en';
    return (
      <Helmet>
        <html lang={lang} />
        <link
          href={withPrefix(this.replaceSlugLang(`/${alt}/`))}
          rel="alternate"
          hrefLang={alt}
        />
      </Helmet>);
  }

  toggleLanguage = () => {
    const { langKey } = this.props;
    if (!langKey) { return undefined; }
    const lang = /^en/.test(langKey) ? 'ja' : 'en';
    return (
      <NavbarItem
        href={withPrefix(this.replaceSlugLang(`/${lang}/`))}
        rel="alternate"
        hrefLang={lang}
      >
        <Icon i="language" size={2} />
        {/^en/.test(langKey) ? '🇬🇧▶︎🇯🇵' : '🇯🇵▶︎🇬🇧'}
      </NavbarItem>);
  };

  replaceSlugLang = (lang) => {
    const { path } = this.props;
    return path ? path.replace(/^\/(ja|en)\//, lang) : lang;
  };

  /** Invoked on burger menu button has clicked. */
  burgerOnClick = () => {
    this.setState(p => ({ ...p, active: !p.active }));
  };

  /** Create rendered view elements. */
  render = () => {
    const {
      children, className, langKey, style,
    } = this.props;
    const { active } = this.state;
    return (
      <Navbar
        className={`${className} is-fixed-top`}
        aria-label="main navigation"
        style={style}
      >
        {this.alternateNavigation()}
        <NavbarBrand>
          <NavbarItem>
            <Link to={langKey && langKey.length >= 2 ? `/${langKey}/` : '/'}>
              <img
                alt="danmaq"
                src={LogoInv}
                width="282"
                height="100"
              />
            </Link>
          </NavbarItem>
          <NavbarBurger
            isActive={active}
            onClick={this.burgerOnClick}
          />
        </NavbarBrand>
        <NavbarMenu isActive={active} role="navigation">
          <NavbarStart>{children}</NavbarStart>
          <NavbarEnd>
            {this.toggleLanguage()}
            <NavbarItem
              href="https://github.com/danmaq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon i="github" size={2} />
            </NavbarItem>
            <NavbarItem
              href="https://twitter.com/danmaq"
              herflang="ja"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon i="twitter" size={2} />
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>);
  };
}

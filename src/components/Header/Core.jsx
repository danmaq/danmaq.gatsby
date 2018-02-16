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
 * @typedef {object} Header.state
 * @property {boolean} active
 */

/** Header component. */
export default class extends React.Component {
  /** Default properties. */
  static defaultProps = {
    children: null,
    className: 'is-light',
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
   * @type {Header.state}
   */
  state = { active: false };

  alternateNavigation = () => {
    const { pathContext: { langKey } } = this.props;
    if (!langKey) { return undefined; }
    const lang = /^en/.test(langKey) ? 'en' : 'ja';
    const alt = /^en/.test(langKey) ? 'ja' : 'en';
    const result = (
      <Helmet>
        <html lang={lang} />
        {/* <link href={withPrefix(this.replaceSlugLang(`/${alt}/`))}
                        rel="alternate"
                        hrefLang={alt} /> */}
      </Helmet>);
    return result;
  }

  toggleLanguage = () => {
    const { pathContext: { langKey } } = this.props;
    if (!langKey) { return undefined; }
    const lang = /^en/.test(langKey) ? 'ja' : 'en';
    const result = (
      <NavbarItem
        href={withPrefix(this.replaceSlugLang(`/${lang}/`))}
        rel="alternate"
        hrefLang={lang}
      >
        <Icon i="language" size={2} />
        {/^en/.test(langKey) ? '🇬🇧▶︎🇯🇵' : '🇯🇵▶︎🇬🇧'}
      </NavbarItem>);
    return result;
  };

  replaceSlugLang = (lang) => {
    const { pathContext: { slug, path } } = this.props;
    const sp = path || slug;
    return !sp ? lang : sp.replace(/^\/(ja|en)\//, lang);
  };

  /** Invoked on burger menu button has clicked. */
  burgerOnClick = () =>
    (({ active }) => this.setState(p => ({ ...p, active: !active })))(this.state);

  /** Create rendered view elements. */
  render = () => {
    const {
      children, className, pathContext: { slug }, style,
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
            <Link to={slug ? slug.replace(/\/(en|ja)\/.+/, '/$1/') : '/'}>
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
import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import {
  Button,
  Card,
  CardContent,
  CardImage,
  Column,
  Content,
} from 'bloomer';

import CoverImage from '../../CoverImage';
import Icon from '../../Icon';

/**
 * @typedef Props
 * @property {React.ReactNode} detail
 * @property {string} href
 * @property {React.ReactNode} hrefCaption
 * @property {React.ReactNode} title
 * @property {React.ReactNode} subtitle
 * @property {{(key: string) => string}} t i18n translator.
 * @property {?string} thumbnail
 * @property {?string} youtube
 */

/**
 * Common work component for LP.
 * @extends React.Component<Props>
 */
class Work extends React.Component {
  /**
   * Default properties.
   * @type {Props}
   */
  static defaultProps = {
    hrefCaption: '',
    subtitle: '',
    thumbnail: null,
    youtube: null,
  };

  /** Property types. */
  static propTypes = {
    detail: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    hrefCaption: PropTypes.string,
    title: PropTypes.node.isRequired,
    subtitle: PropTypes.node,
    t: PropTypes.func.isRequired,
    thumbnail: PropTypes.string,
    youtube: PropTypes.string,
  };

  /** Whether should require redraw. */
  shouldComponentUpdate = () => false;

  /** Create thumbnail elements. */
  renderThumb = () => {
    const { thumbnail, title, youtube } = this.props;
    if (!(youtube || thumbnail)) { return null; }
    return (
      <CardImage>
        <CoverImage {...{ src: thumbnail, title, youtube }} />
      </CardImage>);
  };

  /** Create link elements. */
  renderMore = () => {
    const { href, hrefCaption, t } = this.props;
    return (/^https?:\/\//.test(href) ?
      <Button
        href={href}
        role="link"
        target="_blank"
        rel="noopener noreferrer"
        isLink
        isOutlined
      >
        {hrefCaption || t('more')}&nbsp;&nbsp;<Icon i="external-link" />
      </Button> :
      <Link className="button is-link" to={href} role="link">
        {hrefCaption || t('more')}
      </Link>);
  };

  /** Create title elements. */
  renderCaption = () => {
    const { title, subtitle } = this.props;
    return (
      !subtitle
        ? <h3>{title}</h3>
        : <h3>{title}<br /><small>{subtitle}</small></h3>);
  };

  /** Create rendered view elements. */
  render = () => (
    <Column>
      <Card>
        {this.renderThumb()}
        <CardContent>
          <article>
            <Content>
              {this.renderCaption()}
              <p>{this.props.detail}</p>
              <p>{this.renderMore()}</p>
            </Content>
          </article>
        </CardContent>
      </Card>
    </Column>);
}

export default translate('blog')(Work);

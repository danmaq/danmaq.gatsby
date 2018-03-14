import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
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

/** Common work component for LP. */
export default class extends React.Component {
  /** Default properties. */
  static defaultProps = {
    hrefCaption: 'もっと見る',
    subtitle: '',
    thumbnail: null,
    youtube: null,
  };

  /** Property types. */
  static propTypes = {
    detail: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    hrefCaption: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
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
    const { href, hrefCaption } = this.props;
    return (/^https?:\/\//.test(href) ?
      <Button
        href={href}
        role="link"
        target="_blank"
        rel="noopener noreferrer"
        isLink
        isOutlined
      >
        {hrefCaption}&nbsp;&nbsp;<Icon i="external-link" />
      </Button> :
      <Link className="button is-link" to={href} role="link">
        {hrefCaption}
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

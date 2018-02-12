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

import CoverImage from '~/src/components/CoverImage';
import Icon from '~/src/components/Icon';

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
  _thumbnail = () => {
    const { thumbnail, title, youtube } = this.props;
    if (!(youtube || thumbnail)) { return null; }
    const props = { src: thumbnail, title, youtube };
    return (
      <CardImage>
        <CoverImage {...props} />
      </CardImage>);
  };

  /** Create link elements. */
  _linkButton = () => {
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
  _title = () => {
    const { title, subtitle } = this.props;
    return (
      !subtitle
        ? <h3>{title}</h3>
        : <h3>{title}<br /><small>{subtitle}</small></h3>);
  };

  /** Create rendered view elements. */
  render = () => {
    const { detail } = this.props;
    return (
      <Column>
        <Card>
          {this._thumbnail()}
          <CardContent>
            <article>
              <Content>
                {this._title()}
                <p>{detail}</p>
                <p>{this._linkButton()}</p>
              </Content>
            </article>
          </CardContent>
        </Card>
      </Column>);
  };
}

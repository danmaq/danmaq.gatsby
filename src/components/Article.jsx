import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {
  Card,
  CardContent,
  CardHeader,
  CardImage,
  Column,
  Content,
  Title,
} from 'bloomer';
import _ from 'lodash';

import CoverImage from './CoverImage';

import Mark from '../assets/logo/mark.svg';

import './typedef';

const more = 'もっと見る';

/**
 * @typedef Props
 * @property {React.ReactNode} caption
 * @property {string} date
 * @property {string} detail
 * @property {string} [href]
 * @property {string} [imgSrc]
 * @property {string} [imgSet]
 * @property {string} [imgSizes]
 * @property {string} strDate
 * @property {string} [youtube]
 */

/**
 * Common card component for LP.
 * @extends React.Component<Props>
 */
export default class Article extends React.Component {
  /**
   * Default Properties.
   * @type {Props}
   */
  static defaultProps = {
    href: undefined,
    imgSet: undefined,
    imgSrc: Mark,
    imgSizes: undefined,
    youtube: undefined,
  };

  /** Property types. */
  static propTypes = {
    caption: PropTypes.node.isRequired,
    date: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    href: PropTypes.string,
    imgSrc: PropTypes.string,
    imgSet: PropTypes.string,
    imgSizes: PropTypes.string,
    strDate: PropTypes.string.isRequired,
    youtube: PropTypes.string,
  };

  /**
   * Create an article element.
   * @param {{node: { frontmatter: FrontMatter, fields: { slug: string }, excerpt: string }}} item
   * @param {number} key
   */
  static create =
    (item, key) => {
      const {
        node: {
          frontmatter: {
            cover,
            date,
            strDate,
            title,
            youtube,
          },
          fields: { slug },
          excerpt,
        },
      } = item;
      return (<Article
        key={key}
        href={slug}
        date={date}
        imgSrc={_.get(cover, 'childImageSharp.responsiveSizes.src')}
        imgSet={_.get(cover, 'childImageSharp.responsiveSizes.srcSet')}
        imgSizes={_.get(cover, 'childImageSharp.responsiveSizes.sizes')}
        strDate={strDate}
        caption={title}
        youtube={youtube}
        detail={excerpt}
      />);
    }

  /** Whether should require redraw. */
  shouldComponentUpdate = () => false;

  /** Create rendered view elements. */
  render = () => {
    const {
      caption,
      date,
      detail,
      href,
      imgSrc,
      imgSet,
      imgSizes,
      strDate,
      youtube,
    } = this.props;
    return (
      <Column
        className="is-3 is-3-fullhd is-4-widescreen is-6-desktop is-6-tablet is-12-mobile"
      >
        <Card>
          <CardImage>
            <Link to={href} role="link">
              <CoverImage
                alt={more}
                sizes={imgSizes}
                srcSet={imgSet}
                src={imgSrc}
                title={caption}
                youtube={youtube}
              />
            </Link>
          </CardImage>
          <CardHeader>
            <Title className="card-header-title" tag="h3">
              {caption}
            </Title>
          </CardHeader>
          <CardContent>
            <Content>
              <p>{detail}</p>
              <p>
                <Link className="button is-link" to={href} role="link">
                  {more}
                </Link>
                &nbsp;
                <time dateTime={date}>{strDate}</time>
              </p>
            </Content>
          </CardContent>
        </Card>
      </Column>);
  };
}

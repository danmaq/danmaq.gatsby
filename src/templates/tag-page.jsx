import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby-link';
import { getUserLangKey } from 'ptz-i18n';
import Helmet from 'react-helmet';
import {
  Columns,
  Column,
  Container,
  Content,
  Hero,
  HeroBody,
  HeroFooter,
  Title,
} from 'bloomer';
import _ from 'lodash';

import Header from '../components/Header';
import CoverImage from '../components/CoverImage';

import '../components/typedef';

/**
 * Query for GraphQL.
 * Since its string is precompiled, you should not include dynamic elements.
 */
export const query =
  graphql`
  query TagPage($tag: String, $langKey: String) {
  allMarkdownRemark(
    limit: 24,
    sort: { fields: [frontmatter___date], order: DESC },
    filter: {
      frontmatter: {
        tags: { in: [$tag] },
        draft: { eq: false },
        redirect: { eq: null },
      },
      fields: { langKey: { eq: $langKey } }
    }) {
    totalCount
    edges {
      node {
        id
        frontmatter{
          cover {
            childImageSharp {
              responsiveSizes {
                src
                srcSet
                sizes
              }
            }
          }
          date: date
          strDate: date(formatString: "YYYY/M/D")
          title,
          youtube
        },
        fields{
          slug
          langKey
        },
        excerpt
      }
    }
  }
}`;

/**
 * @typedef ResultQL
 * @property {{frontmatter: FrontMatter, html: string}} markdownRemark
 * @property {{siteMetadata: SiteMetaData}} site
 */

/**
 * @typedef Props
 * @property {ResultQL} data
 * @property {PathContext} pathContext
 */

/**
 * Blog post component.
 * @extends React.Component<Props>
 */
export default class extends React.PureComponent {
  /** Property types. */
  static propTypes = {
    data: PropTypes.object.isRequired,
    pathContext: PropTypes.object.isRequired,
  };

  /** Create rendered view elements. */
  render = () => {
    const {
      data: { markdownRemark: { html, frontmatter: { date, strDate, title } } },
      pathContext,
    } = this.props;
    return (
      <div />);
  };
}

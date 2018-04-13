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
query BlogPostByPath($path: String!) {
  markdownRemark(fields: { slug: { eq: $path } }) {
    html
    frontmatter {
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
      strDate: date(formatString: "YYYY/M/D"),
      redirect,
      title,
      youtube
    }
  },
  site{
    siteMetadata{
      langKeyDefault
      langs
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
export default class extends React.Component {
  /** Property types. */
  static propTypes = {
    data: PropTypes.object.isRequired,
    pathContext: PropTypes.object.isRequired,
  };

  /**
   * Initialize instance.
   * @param {Props} props
   */
  constructor(props) {
    super(props);
    const {
      markdownRemark: { frontmatter: { redirect } },
      site: { siteMetadata: { langKeyDefault, langs } },
    } = props.data;
    if (redirect && typeof window !== 'undefined') {
      /** @type {string} */
      const langKey = getUserLangKey(langs, langKeyDefault);
      const dest = withPrefix(redirect.replace('${lang}', langKey));
      /* eslint no-underscore-dangle: 0 */
      window.___history.replace(dest);
    }
  }

  /** Create rendered view elements. */
  renderAltLink = () => {
    const {
      data: {
        markdownRemark: { frontmatter: { redirect } },
        site: { siteMetadata: { langs } },
      },
    } = this.props;
    return (!redirect ? undefined :
      langs.map((v, i) => (
        <link
          key={i}
          href={redirect.replace('${lang}', v)}
          hrefLang={v}
          rel="alternate"
        />)));
  };

  /** Create rendered view elements. */
  renderCover = () => {
    const { data: { markdownRemark: { frontmatter: { cover, youtube } } } } = this.props;
    return (<CoverImage
      alt=""
      sizes={_.get(cover, 'childImageSharp.responsiveSizes.sizes')}
      src={_.get(cover, 'childImageSharp.responsiveSizes.src')}
      srcSet={_.get(cover, 'childImageSharp.responsiveSizes.srcSet')}
      youtube={youtube}
    />);
  };

  /** Create rendered view elements. */
  render = () => {
    const {
      data: { markdownRemark: { html, frontmatter: { date, strDate, title } } },
      pathContext: { langKey, path, slug },
    } = this.props;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          {this.renderAltLink()}
        </Helmet>
        <Header {...{ langKey, path, slug }} />
        <main>
          <Hero isSize="medium">
            <HeroBody>
              <Container>
                <Title isSize={2} tag="h1">
                  {title}
                </Title>
              </Container>
            </HeroBody>
            <HeroFooter>
              <aside className="container">
                投稿日時: <time dateTime={date}>{strDate}</time>
              </aside>
            </HeroFooter>
          </Hero>
          <section className="container">
            {this.renderCover()}
            <Columns isCentered>
              <Column isHidden="touch" isSize={1} />
              <Column isSize={10}>
                <Content isSize="medium">
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </Content>
              </Column>
              <Column isHidden="touch" isSize={1} />
            </Columns>
          </section>
        </main>
      </div>);
  };
}

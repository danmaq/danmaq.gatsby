import React from 'react';
import PropTypes from 'prop-types';
import { Link, withPrefix } from 'gatsby-link';
import i18n from 'i18next';
import { getUserLangKey } from 'ptz-i18n';
import Helmet from 'react-helmet';
import { translate } from 'react-i18next';
import {
  Columns,
  Column,
  Container,
  Content,
  Hero,
  HeroBody,
  Tag,
  Title,
} from 'bloomer';
import _ from 'lodash';

import Header from '../components/Header';
import CoverImage from '../components/CoverImage';

import * as TypePreset from '../components/TypePreset';
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
      tags,
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
 * @property {{(key: string) => string}} t i18n translator.
 */

/**
 * Blog post component.
 * @extends React.Component<Props>
 */
class BlogPost extends React.Component {
  /** Property types. */
  static propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        frontmatter: TypePreset.frontmatter().isRequired,
        html: PropTypes.string.isRequired,
      }).isRequired,
      site: PropTypes.shape({
        siteMetadata: TypePreset.siteMetadata().isRequired,
      }).isRequired,
    }).isRequired,
    pathContext: TypePreset.pathContext().isRequired,
    t: PropTypes.func.isRequired,
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
    i18n.changeLanguage(props.pathContext.langKey);
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
  renderAside = () => {
    const {
      data: { markdownRemark: { frontmatter: { date, strDate, tags } } },
      t,
    } = this.props;
    return (
      <aside className="container">
        <ul>
          <li>
            {t('posted')}
            <time dateTime={date}>{strDate}</time>
          </li>
          <li className="tags">
            {tags.map(this.renderTag())}
          </li>
        </ul>
      </aside>);
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
  renderHero = () => {
    const { data: { markdownRemark: { frontmatter: { title } } } } = this.props;
    return (
      <Hero isSize="medium">
        <HeroBody>
          <Container>
            <Title isSize={2} tag="h1">
              {title}
            </Title>
          </Container>
        </HeroBody>
      </Hero>);
  };

  /** Create rendered view elements. */
  renderTag = () => {
    const { t } = this.props;
    return (tag, key) => (
      <Tag {...{ key }}>
        {t(tag)}
      </Tag>
    );
  }

  /** Create rendered view elements. */
  render = () => {
    const {
      data: { markdownRemark: { html, frontmatter: { title } } },
      pathContext: { langKey, path },
    } = this.props;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          {this.renderAltLink()}
        </Helmet>
        <Header {...{ langKey, path }} />
        <main>
          {this.renderHero()}
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
        {this.renderAside()}
      </div>);
  };
}

export default translate('blog')(BlogPost);

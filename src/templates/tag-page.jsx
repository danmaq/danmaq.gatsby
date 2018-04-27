import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { translate } from 'react-i18next';

import { Columns, Container, Hero, HeroBody, Title } from 'bloomer';
import i18n from 'i18next';

import Article from '../components/Article';
import Header from '../components/Header';

import * as TypePreset from '../components/TypePreset';
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
 * @typedef Props
 * @property {{allMarkdownRemark: AllMarkdownRemark}} data
 * @property {PathContext} pathContext
 * @property {{(key: string) => string}} t i18n translator.
 */

/**
 * Blog post component.
 * @extends React.Component<Props>
 */
class TagPage extends React.PureComponent {
  /** Property types. */
  static propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: TypePreset.allMarkdownRemark().isRequired,
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
    i18n.changeLanguage(props.pathContext.langKey);
  }

  /** Create rendered view elements. */
  render = () => {
    const {
      data: { allMarkdownRemark: { totalCount, edges } },
      pathContext: { langKey, tag },
      t,
    } = this.props;
    return (
      <div>
        <Helmet>
          <title>{t('tag')}{tag}</title>
        </Helmet>
        <Header {...{ langKey }} path={`/${langKey}/tag/${tag}`} />
        <Hero isSize="medium">
          <HeroBody>
            <Container>
              <Title isSize={2} tag="h1">{t('tag')}{tag}</Title>
            </Container>
          </HeroBody>
        </Hero>
        <main>
          <section className="container">
            <p>{t('posts', { posts: totalCount })}</p>
            <Columns isMultiline>
              {edges.map(Article.create(t('more')))}
            </Columns>
          </section>
        </main>
      </div>);
  };
}

export default translate('blog')(TagPage);

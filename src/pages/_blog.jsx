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
 * @typedef Props
 * @property {{allMarkdownRemark: AllMarkdownRemark}} data
 * @property {PathContext} pathContext
 * @property {{(key: string) => string}} t i18n translator.
 */

/**
 * Articles list with language independent.
 * @extends React.Component<Props>
 */
class Blog extends React.Component {
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

  /** Whether should require redraw. */
  shouldComponentUpdate = () => false;

  /** Create rendered view elements. */
  render = () => {
    const {
      data: { allMarkdownRemark: { totalCount, edges } },
      pathContext: { langKey, slug },
      t,
    } = this.props;
    return (
      <div>
        <Helmet>
          <title>Blog</title>
        </Helmet>
        <Header {...{ langKey }} path={slug} />
        <Hero isSize="medium">
          <HeroBody>
            <Container>
              <Title isSize={2} tag="h1">Blog</Title>
            </Container>
          </HeroBody>
        </Hero>
        <main>
          <section className="container">
            <p>{t('posts', totalCount)}</p>
            <p>{totalCount} 件の記事</p>
            <Columns isMultiline>
              {edges.map(Article.create)}
            </Columns>
          </section>
        </main>
      </div>);
  };
}

export default translate('blog')(Blog);

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Columns, Container, Hero, HeroBody, Title } from 'bloomer';
import i18n from 'i18next';

import Article from '../components/Article';
import Header from '../components/Header';

/**
 * @typedef ResultQL
 * @property {{edges: string, totalCount: number}} allMarkdownRemark
 */

/**
 * @typedef Props
 * @property {ResultQL} data
 * @property {PathContext} pathContext
 */

/**
 * Articles list with language independent.
 * @extends React.Component<Props>
 */
export default class extends React.Component {
  /** Property types. */
  static propTypes = {
    data: PropTypes.object.isRequired,
    pathContext: PropTypes.object.isRequired,
  };

  /** Whether should require redraw. */
  shouldComponentUpdate = () => false;

  /** Create rendered view elements. */
  render = () => {
    const {
      data: { allMarkdownRemark: { totalCount, edges } },
      pathContext: { langKey, path },
    } = this.props;
    i18n.changeLanguage(langKey);
    return (
      <div>
        <Helmet>
          <title>Blog</title>
        </Helmet>
        <Header {...{ langKey, path }} />
        <Hero isSize="medium">
          <HeroBody>
            <Container>
              <Title isSize={2} tag="h1">Blog</Title>
            </Container>
          </HeroBody>
        </Hero>
        <main>
          <section className="container">
            <p>{totalCount} 件の記事</p>
            <Columns isMultiline>
              {edges.map(Article.create)}
            </Columns>
          </section>
        </main>
      </div>);
  };
}

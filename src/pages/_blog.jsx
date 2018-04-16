import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Columns, Container, Hero, HeroBody, Title } from 'bloomer';
import i18n from 'i18next';

import Article from '../components/Article';
import Header from '../components/Header';

import * as TypePreset from '../components/TypePreset';
import '../components/typedef';

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
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.string.isRequired,
        totalCount: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
    pathContext: TypePreset.pathContext().isRequired,
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
            <p>{totalCount} 件の記事</p>
            <Columns isMultiline>
              {edges.map(Article.create)}
            </Columns>
          </section>
        </main>
      </div>);
  };
}

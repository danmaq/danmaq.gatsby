import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Container, Hero, HeroBody, Title } from 'bloomer';

import Header from '../../components/Header';

import * as TypePreset from '../../components/TypePreset';
import '../../components/typedef';

/**
 * @typedef Props
 * @property {{allMarkdownRemark: TagsAllMarkdownRemark}} data
 * @property {PathContext} pathContext
 */

/**
 * Top page component of articles with language independent.
 * @extends React.PureComponent<Props>
 */
export default class extends React.PureComponent {
  /** Property types. */
  static propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: TypePreset.tagsAllMarkdownRemark().isRequired,
    }).isRequired,
    pathContext: TypePreset.pathContext().isRequired,
  };

  render = () => {
    const {
      data: { allMarkdownRemark: { group } },
      pathContext: { langKey, slug },
    } = this.props;
    return (
      <div>
        <Helmet>
          <title>Tags</title>
        </Helmet>
        <Header {...{ langKey }} path={slug} />
        <Hero isSize="medium">
          <HeroBody>
            <Container>
              <Title isSize={2} tag="h1">Tags</Title>
            </Container>
          </HeroBody>
        </Hero>
        <main>
          <section>
            <p>Length: {group.length}</p>
          </section>
        </main>
      </div>);
  };
}

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Columns, Container, Hero, HeroBody, Title } from 'bloomer';
import { translate } from 'react-i18next';

import Header from '../../components/Header';
import Tag from '../../components/Tag';

import * as TypePreset from '../../components/TypePreset';
import '../../components/typedef';

/**
 * @typedef Props
 * @property {{allMarkdownRemark: TagsAllMarkdownRemark}} data
 * @property {PathContext} pathContext
 * @property {{(key: string) => string}} t i18n translator.
 */

/**
 * Top page component of articles with language independent.
 * @extends React.Component<Props>
 */
class Tags extends React.Component {
  /** Property types. */
  static propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: TypePreset.tagsAllMarkdownRemark().isRequired,
    }).isRequired,
    pathContext: TypePreset.pathContext().isRequired,
    t: PropTypes.func.isRequired,
  };

  /** Whether should require redraw. */
  shouldComponentUpdate = () => false;

  /**
   * @param {TagItem} item
   * @param {key} key
   */
  renderItem = (item, key) => {
    const { fieldValue, totalCount } = item;
    return (<Tag
      {...{ key, totalCount }}
      label={this.props.t(fieldValue)}
      slug={fieldValue}
    />);
  };

  render = () => {
    const {
      data: { allMarkdownRemark: { group } },
      pathContext: { langKey, slug },
      t,
    } = this.props;
    return (
      <div>
        <Helmet>
          <title>{t('tags')}</title>
        </Helmet>
        <Header {...{ langKey }} path={slug} />
        <Hero isSize="medium">
          <HeroBody>
            <Container>
              <Title isSize={2} tag="h1">{t('tags')}</Title>
            </Container>
          </HeroBody>
        </Hero>
        <main>
          <section className="container">
            <p>{t('length')}{group.length}</p>
            <Columns isCentered isMultiline>
              {group.map(this.renderItem)}
            </Columns>
          </section>
        </main>
      </div>);
  };
}

export default translate('blog')(Tags);

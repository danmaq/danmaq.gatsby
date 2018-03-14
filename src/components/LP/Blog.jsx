import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Link from 'gatsby-link';
import { Columns, Content, Section } from 'bloomer';

import Article from '../Article';
import Icon from '../Icon';

import Heading from './Heading';

/** Blog component. */
class Blog extends React.Component {
  /** Property types. */
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    langKey: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired,
  };

  /** Whether should require redraw. */
  shouldComponentUpdate = () => false;

  /** Create rendered view elements. */
  render = () => {
    const { items, langKey, t } = this.props;
    return (
      <Section id="blog">
        <Heading caption={t('blogHeading')} detail={t('blogDesc')} />
        <Columns isCentered isMultiline>
          {items.map(Article.create)}
        </Columns>
        <Content>
          <Link
            className="button is-fullwidth is-large is-outlined is-link"
            to={`/${langKey}/blog`}
          >
            <Icon i="angle-down" size={2} />
            {t('blogMore')}
          </Link>
        </Content>
      </Section>);
  };
}

export default translate('LP')(Blog);

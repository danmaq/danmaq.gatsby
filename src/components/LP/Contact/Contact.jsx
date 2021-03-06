import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Button, Columns, Column } from 'bloomer';

import Icon from '../../Icon';
import Heading from '../Heading';

/**
 * @typedef Props
 * @property {{(key: string) => string}} t i18n translator.
 */

/**
 * Contact component.
 * @extends React.Component<Props>
 */
class Contact extends React.Component {
  /** Property types. */
  static propTypes = { t: PropTypes.func.isRequired };

  /** Whether should require redraw. */
  shouldComponentUpdate = () => false;

  /** Create rendered view elements. */
  render = () => {
    const { t } = this.props;
    return (
      <div>
        <Heading caption={t('contactHeading')} detail={t('contactDesc')} />
        <Columns>
          <Column>
            <Button
              href="https://twitter.com/intent/tweet?text=Hi%2c%20%40danmaq%20&amp;related=danmaq"
              target="_blank"
              rel="noopener noreferrer"
              isColor="info"
              isSize="large"
              isFullWidth
            >
              <Icon i="twitter" size={2} />
              {t('contactTwitter')}
              <small>&nbsp;&nbsp;<Icon i="external-link" /></small>
            </Button>
          </Column>
          <Column>
            <Button
              href="https://peing.net/danmaq"
              target="_blank"
              rel="noopener noreferrer"
              hrefLang="ja"
              isColor="info"
              isSize="large"
              isFullWidth
              isOutlined
            >
              <Icon i="twitter" size={2} />
              {t('contactPeing')}
              <small>&nbsp;&nbsp;<Icon i="external-link" /></small>
            </Button>
          </Column>
        </Columns>
      </div>);
  };
}

export default translate('LP')(Contact);

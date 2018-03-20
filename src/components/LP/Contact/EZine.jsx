import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Button, Content, Control, Field, Input } from 'bloomer';

import Icon from '../../Icon';
import Heading from '../Heading';

/**
 * @typedef Props
 * @property {{(key: string) => string}} t i18n translator.
 */

/**
 * EZine component.
 * @extends React.Component<Props>
 */
class EZine extends React.Component {
  /** Property types. */
  static propTypes = { t: PropTypes.func.isRequired };

  /** Whether should require redraw. */
  shouldComponentUpdate = () => false;

  /** Create rendered view elements. */
  render = () => {
    const { t } = this.props;
    return (
      <div>
        <Heading
          caption={t('contactEZineHeading')}
          detail={t('contactEZineDesc')}
          sub
        />
        <form
          className="container"
          action="https://88auto.biz/danmaq/planmail.php"
          method="post"
        >
          <Field hasAddons>
            <Input type="hidden" name="mcode" value="UTF-8" />
            <Input type="hidden" name="pid" value="4" />
            <Input type="hidden" name="spflg" value="1" />
            <Input type="hidden" name="sbm" value="登録" />
            <Control className="is-expanded">
              <Input
                type="email"
                name="email"
                placeholder={t('contactEZineMail')}
                required="required"
                pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*"
                isSize="medium"
              />
            </Control>
            <Control>
              <Button isColor="primary" isSize="medium">
                <Icon i="gift" />&nbsp;{t('contactEZineSend')}
              </Button>
            </Control>
          </Field>
          <aside>
            <Content hasTextAlign="right">
              Powered by&nbsp;
              <a
                href="http://autobiz.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AutoBiz&nbsp;
                <Icon i="external-link" />
              </a>.
            </Content>
          </aside>
        </form>
      </div>);
  };
}

export default translate('LP')(EZine);

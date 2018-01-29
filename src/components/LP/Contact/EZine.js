'use strict';

import React from 'react';
import { translate } from 'react-i18next';
import { Button, Content, Control, Field, Input } from 'bloomer';

import Icon from '~/src/components/Icon';
import Heading from '../Heading';

export default translate('LP')(
    ({ t }) =>
    <div>
        <Heading caption={t('contactEZineHeading')}
                 detail={t('contactEZineDesc')}
                 sub />
        <form className="container"
              action="https://88auto.biz/danmaq/planmail.php"
              method="post">
            <Field hasAddons>
                <Input type="hidden" name="mcode" value="UTF-8" />
                <Input type="hidden" name="pid" value="4" />
                <Input type="hidden" name="spflg" value="1" />
                <Input type="hidden" name="sbm" value="登録" />
                <Control className="is-expanded">
                    <Input type="email"
                           name="email"
                           placeholder={t('contactEZineMail')}
                           required="required"
                           pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*"
                           isSize="medium" />
                </Control>
                <Control>
                    <Button isColor="primary" isSize="medium">
                        <Icon i="gift" />&nbsp;{t('contactEZineSend')}
                    </Button>
                </Control>
            </Field>
            <aside>
                <Content hasTextAlign="right">
                    Powered by <a href="http://autobiz.jp/" target="_blank">AutoBiz <Icon i="external-link" /></a>.
                </Content>
            </aside>
        </form>
    </div>
);
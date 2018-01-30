'use strict';

import React from 'react';
import { translate } from 'react-i18next';
import { Button, Columns, Column } from 'bloomer';

import Icon from '~/src/components/Icon';
import Heading from '../Heading';

export default translate('LP')(
    ({ t }) =>
    <div>
        <Heading caption={t('contactHeading')} detail={t('contactDesc')} />
        <Columns>
            <Column>
                <Button href="https://twitter.com/intent/tweet?text=Hi%2c%20%40danmaq%20&amp;related=danmaq"
                        target="_blank"
                        isColor="info"
                        isSize="large"
                        isFullWidth>
                    <Icon i="twitter" size={2} />
                    &nbsp;{t('contactTwitter')}
                    <small>&nbsp;&nbsp;<Icon i="external-link" /></small>
                </Button>
            </Column>
            <Column>
                <Button href="https://peing.net/danmaq"
                        target="_blank"
                        hrefLang="ja"
                        isColor="info"
                        isSize="large"
                        isFullWidth
                        isOutlined>
                    <Icon i="twitter" size={2} />
                    &nbsp;{t('contactPeing')}
                    <small>&nbsp;&nbsp;<Icon i="external-link" /></small>
                </Button>
            </Column>
        </Columns>
    </div>
);
'use strict';

import React from 'react';
import { translate } from 'react-i18next';
import { Columns, Section } from 'bloomer';

import Heading from '../Heading';
import Work from './Work';

import EvilMagic from '~/src/assets/LP/photo/evil_magic.jpg';
import Reimu from '~/src/assets/LP/photo/reimu.jpg';

export default translate('LP')(
    ({ t }) =>
    <Section id="works">
        <Heading caption={t('worksHeading')} detail={t('worksDesc')} />
        <Columns isDesktop>
            <Work id="ctc"
                  href="/"
                  title={t('worksCtCTitle')}
                  subtitle={t('worksCtCSubTitle')}
                  youtube="TLV-l93_h2Y"
                  detail={t('worksCtCDesc')} />
            <Work id="atc"
                  href="/"
                  title={t('worksAtCTitle')}
                  youtube="NmR9EevRMJc"
                  detail={t('worksAtCDesc')} />
        </Columns>
        <Columns isDesktop>
            <Work id="evil"
                  href="/"
                  title={t('worksEMTitle')}
                  subtitle={t('worksEMSubTitle')}
                  thumbnail={EvilMagic}
                  detail={t('worksEMDesc')} />
            <Work id="evil"
                  href="https://pixiv.me/danmaq"
                  hrefCaption="Go to Pixiv"
                  thumbnail={Reimu}
                  title={t('worksPixivTitle')}
                  detail={t('worksPixivDesc')} />
        </Columns>
    </Section>
);
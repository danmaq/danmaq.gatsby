import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Columns, Section } from 'bloomer';

import Heading from '../Heading';
import Work from './Work';

import EvilMagic from '../../../assets/LP/photo/evil_magic.jpg';
import Reimu from '../../../assets/LP/photo/reimu.jpg';

/**
 * Works component.
 * @extends React.Component
 */
class Works extends React.Component {
  /** Property types. */
  static propTypes = {
    langKey: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired,
  };

  /** Whether should require redraw. */
  shouldComponentUpdate = () => false;

  /** Create rendered view elements. */
  render = () => {
    const { langKey, t } = this.props;
    return (
      <Section id="works">
        <Heading caption={t('worksHeading')} detail={t('worksDesc')} />
        <Columns isDesktop>
          <Work
            id="ctc"
            href={`/${langKey}/p/c/concealed-the-conclusion/`}
            title={t('worksCtCTitle')}
            subtitle={t('worksCtCSubTitle')}
            youtube="DEIW9994qYE"
            detail={t('worksCtCDesc')}
          />
          <Work
            id="atc"
            href={`/${langKey}/p/a/answer-the-conclusion/`}
            title={t('worksAtCTitle')}
            youtube="NmR9EevRMJc"
            detail={t('worksAtCDesc')}
          />
        </Columns>
        <Columns isDesktop>
          <Work
            id="evil"
            href={`/${langKey}/p/e/evil-magic/`}
            title={t('worksEMTitle')}
            subtitle={t('worksEMSubTitle')}
            thumbnail={EvilMagic}
            detail={t('worksEMDesc')}
          />
          <Work
            id="evil"
            href="https://pixiv.me/danmaq"
            hrefCaption="Go to Pixiv"
            thumbnail={Reimu}
            title={t('worksPixivTitle')}
            detail={t('worksPixivDesc')}
          />
        </Columns>
      </Section>);
  };
}

export default translate('LP')(Works);

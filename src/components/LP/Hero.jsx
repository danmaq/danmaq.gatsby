import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import {
  Button,
  Container,
  Hero,
  HeroBody,
  Subtitle,
  Title,
} from 'bloomer';

import Icon from '../Icon';

/**
 * Theme component.
 * @extends React.Component
 */
class Theme extends React.Component {
  /** Property types. */
  static propTypes = { t: PropTypes.func.isRequired };

  /** Whether should require redraw. */
  shouldComponentUpdate = () => false;

  /** Create rendered view elements. */
  render = () => {
    const { t } = this.props;
    return (
      <Hero className="is-dmqdark" isBold isFullHeight>
        <HeroBody>
          <Container hasTextAlign="centered">
            <Title isSize={1} lang="en">{t('theme')}</Title>
            <Subtitle>{t('themeDesc')}</Subtitle>
            <Subtitle>
              <Button
                className="is-rounded"
                href="#works"
                isColor="primary"
                isSize="large"
                isOutlined
                isInverted
              >
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Icon i="angle-double-down" size={3} />
                &nbsp;&nbsp;&nbsp;&nbsp;
              </Button>
            </Subtitle>
          </Container>
        </HeroBody>
      </Hero>);
  };
}

export default translate('LP')(Theme);

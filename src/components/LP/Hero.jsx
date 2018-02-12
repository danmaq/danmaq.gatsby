'use strict';

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

import Icon from '~/src/components/Icon';

/** Theme component. */
class Theme extends React.Component {
    /** Whether should require redraw. */
    shouldComponentUpdate = () => false;

    /** Create rendered view elements. */
    render =
        () =>
        (({ t }) =>
            <Hero className="is-dmqdark" isBold isFullHeight>
                <HeroBody>
                    <Container hasTextAlign="centered">
                        <Title isSize={1} lang="en">{t('theme')}</Title>
                        <Subtitle>{t('themeDesc')}</Subtitle>
                        <Subtitle>
                            <Button className="is-rounded"
                                    href="#works"
                                    isColor="primary"
                                    isSize="large"
                                    isOutlined
                                    isInverted>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <Icon i="angle-double-down" size={3} />
                                &nbsp;&nbsp;&nbsp;&nbsp;
                            </Button>
                        </Subtitle>
                    </Container>
                </HeroBody>
            </Hero>
        )(this.props);

    /** Property types. */
    static propTypes = { t: PropTypes.func.isRequired };
}

export default translate('LP')(Theme);
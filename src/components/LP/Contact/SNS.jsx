'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Button, Column, Columns, Container, Image } from 'bloomer';

import Icon from '~/src/components/Icon';

import Heading from '../Heading';

import Niconico from '~/src/assets/LP/icon/2525.svg';
import Pixiv from '~/src/assets/LP/icon/pixiv.svg';

/** SNS component. */
class SNS extends React.Component {
    /** Whether should require redraw. */
    shouldComponentUpdate = () => false;

    /** Create rendered view elements. */
    render =
        () =>
        (({ t }) =>
            <div>
                <Heading caption={t('contactSNSHeading')}
                         detail={t('contactSNSDesc')}
                         sub />
                <Container>
                    <Columns className="dmq-sns">
                        <Column>
                            <Columns isMobile>
                                <Column hasTextAlign="centered">
                                    <Button className="is-twitter"
                                            href="https://twitter.com/danmaq"
                                            target="_blank"
                                            hrefLang="ja"
                                            isSize="large">
                                        <Icon i="twitter" size={3} />
                                    </Button>
                                </Column>
                                <Column hasTextAlign="centered">
                                    <Button className="is-github"
                                            href="https://github.com/danmaq"
                                            target="_blank"
                                            isSize="large">
                                        <Icon i="github" size={3} />
                                    </Button>
                                </Column>
                            </Columns>
                        </Column>
                        <Column>
                            <Columns isMobile>
                                <Column hasTextAlign="centered">
                                    <Button className="is-nico"
                                            href="http://com.nicovideo.jp/community/co2711221"
                                            target="_blank"
                                            hrefLang="ja"
                                            isSize="large">
                                        <Image isSize="64x64"
                                               src={Niconico} />
                                    </Button>
                                </Column>
                                <Column hasTextAlign="centered">
                                    <Button className="is-pixiv"
                                            href="https://pixiv.me/danmaq"
                                            target="_blank"
                                            hrefLang="ja"
                                            isSize="large">
                                        <Image isSize="64x64"
                                               src={Pixiv} />
                                    </Button>
                                </Column>
                            </Columns>
                        </Column>
                    </Columns>
                </Container>
            </div>
        )(this.props);

    /** Property types. */
    static propTypes = { t: PropTypes.func.isRequired };
}

export default translate('LP')(SNS);
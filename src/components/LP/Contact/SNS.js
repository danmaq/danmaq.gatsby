'use strict';

import React from 'react';

import Heading from '../Heading';

import { Button, Column, Columns, Image } from 'bloomer';

import Icon from '~/src/components/Icon';

import Niconico from '~/src/assets/LP/icon/2525.svg';
import Pixiv from '~/src/assets/LP/icon/pixiv.svg';

export default () =>
<div>
    <Heading caption="SNS でも最新情報を受け取りましょう"
             detail="主に Twitter や GitHub を中心に活動しています。最新の活動状況も Twitter で配信中です。"
             sub />
    <Columns className="dmq-sns">
        <Column>
            <Columns isMobile>
                <Column hasTextAlign="centered">
                    <Button href="https://twitter.com/danmaq"
                            target="_blank"
                            isSize="large"
                            isLink>
                        <Icon i="twitter" size={3} />
                    </Button>
                </Column>
                <Column hasTextAlign="centered">
                    <Button href="https://github.com/danmaq"
                            target="_blank"
                            isSize="large"
                            isLink>
                        <Icon i="github" size={3} />
                    </Button>
                </Column>
            </Columns>
        </Column>
        <Column>
            <Columns isMobile>
                <Column hasTextAlign="centered">
                    <Button href="http://com.nicovideo.jp/community/co2711221"
                            target="_blank"
                            isSize="large"
                            isLink>
                        <Image isSize="96x96"
                               src={Niconico} />
                    </Button>
                </Column>
                <Column hasTextAlign="centered">
                    <Button href="https://twitter.com/danmaq"
                            target="_blank"
                            isSize="large"
                            isLink>
                        <Image isSize="96x96"
                               src={Pixiv} />
                    </Button>
                </Column>
            </Columns>
        </Column>
    </Columns>
</div>;

/*
    <Grid>
        <Row>
            <Col className="dmq-sns" xs={6} md={3}>
                <Button href="https://twitter.com/danmaq"
                        target="_blank"
                        bsStyle="primary"
                        bsSize="large">
                    <FontAwesome name="twitter"
                                 size="4x"
                                 title="Twitter"
                                 fixedWidth
                                 inverse />
                </Button>
            </Col>
            <Col className="dmq-sns" xs={6} md={3}>
                <Button href="https://github.com/danmaq"
                        target="_blank"
                        bsStyle="primary"
                        bsSize="large">
                    <FontAwesome name="github"
                                 size="4x"
                                 title="GitHub"
                                 fixedWidth
                                 inverse />
                </Button>
            </Col>
            <Col className="dmq-sns" xs={6} md={3}>
                <Button href="http://com.nicovideo.jp/community/co2711221"
                        target="_blank"
                        bsStyle="primary"
                        bsSize="large">
                    <Image alt="niconico"
                           src={Niconico}
                           title="niconico"
                           width={64}
                           height={64}
                           rounded />
                </Button>
            </Col>
            <Col className="dmq-sns" xs={6} md={3}>
                <Button href="https://pixiv.me/danmaq"
                        target="_blank"
                        bsStyle="primary"
                        bsSize="large">
                    <Image alt="pixiv"
                           src={Pixiv}
                           title="pixiv"
                           width={64}
                           height={64}
                           rounded />
                </Button>
            </Col>
        </Row>
    </Grid>

*/
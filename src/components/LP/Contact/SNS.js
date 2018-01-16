'use strict';

import React from 'react';
import { Button, Col, Grid, Image, Row } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import Heading from '../Heading';

import Niconico from '~/src/assets/LP/icon/2525.svg';
import Pixiv from '~/src/assets/LP/icon/pixiv.svg';

export default () =>
<div>
    <Heading caption="SNS でも最新情報を受け取りましょう"
        detail="主に Twitter や GitHub を中心に活動しています。最新の活動状況も Twitter で配信中です。"
        sub />
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
</div>;
'use strict';

import React from 'react';
import { Button, Container, Hero, HeroBody, Subtitle, Title } from 'bloomer';

import Icon from '~/src/components/Icon';

export default () =>
<Hero className="is-dmqdark" isBold isFullHeight>
    <HeroBody>
        <Container hasTextAlign="centered">
            <Title isSize={1} lang="en">Creating, <wbr />and Sharing.</Title>
            <Subtitle>“danmaq” はたった今も、明日の “楽しい” を考えています。</Subtitle>
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
</Hero>;
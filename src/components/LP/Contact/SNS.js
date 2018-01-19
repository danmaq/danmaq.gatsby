'use strict';

import React from 'react';

import Heading from '../Heading';

import { Button, Column, Columns, Container, Image } from 'bloomer';

import Icon from '~/src/components/Icon';

import Niconico from '~/src/assets/LP/icon/2525.svg';
import Pixiv from '~/src/assets/LP/icon/pixiv.svg';

export default () =>
<div>
    <Heading caption="SNS でも最新情報を受け取りましょう"
             detail="主に Twitter や GitHub を中心に活動しています。最新の活動状況も Twitter で配信中です。"
             sub />
    <Container>
        <Columns className="dmq-sns">
            <Column>
                <Columns isMobile>
                    <Column hasTextAlign="centered">
                        <Button className="is-twitter"
                                href="https://twitter.com/danmaq"
                                target="_blank"
                                isSize="large">
                            <Icon i="twitter" size={4} />
                        </Button>
                    </Column>
                    <Column hasTextAlign="centered">
                        <Button className="is-github"
                                href="https://github.com/danmaq"
                                target="_blank"
                                isSize="large">
                            <Icon i="github" size={4} />
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
                                isSize="large">
                            <Image isSize="96x96"
                                   src={Niconico} />
                        </Button>
                    </Column>
                    <Column hasTextAlign="centered">
                        <Button className="is-pixiv"
                                href="https://twitter.com/danmaq"
                                target="_blank"
                                isSize="large">
                            <Image isSize="96x96"
                                   src={Pixiv} />
                        </Button>
                    </Column>
                </Columns>
            </Column>
        </Columns>
    </Container>
</div>;
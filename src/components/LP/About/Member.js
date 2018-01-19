'use strict';

import React from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    Columns,
    Column,
    Container,
    Content,
    Title,
} from 'bloomer';

import Heading from '../Heading';
import Achieve from './Achieve';
import Dept from './Dept';

import Cpp from '~/src/assets/LP/icon/cc.svg';
import Docker from '~/src/assets/LP/icon/docker.svg';
import FSharp from '~/src/assets/LP/icon/fsharp.svg';
import Meteor from '~/src/assets/LP/icon/meteor.svg';
import MariaDB from '~/src/assets/LP/icon/mariadb.svg';
import ReactNative from '~/src/assets/LP/icon/react.svg';
import Unity3D from '~/src/assets/LP/icon/unity3d.svg';
import Enna from '~/src/assets/LP/photo/enna.jpg';

/** Hi! My name is (who?) */
const myname = <ruby>Mc<rp>(</rp><rt>まく</rt><rp>)</rp></ruby>;

export default () =>
<div>
    <Heading caption="メンバー紹介"
             detail="サークル結成以来、プロジェクトごとに都度最高のチームを揃えて、完成したら解散、という形式で活動しています。そのため固定メンバーは “まく” 一人です。"
             sub />
    <Container>
        <Columns>
            <Dept caption={myname}
                  subCaption=" / Shuhei Nomura"
                  image={Enna}
                  detail="本職はフリーのプログラマー 兼 技術者養成講師。元々一人でゲームを作れるようになりたい、と足掻いているうちに、気付けば何でも屋に。元ゲー専講師だった経験を生かし、今後は Web とスマホ/ PC アプリ制作、およびそれを教える活動方面で模索している。"
                  sub />
            <Column>
                <Card className="dmq-dept">
                    <CardHeader>
                        <Title className="card-header-title" tag="h4">
                            主なスキル
                        </Title>
                    </CardHeader>
                    <CardContent>
                        <Content>
                            <p>
                                Web クライアント、スマホアプリ開発を中心に、Web バックエンド、PC アプリも手がけるなど、広く浅く活動しています。
                            </p>
                        </Content>
                        <Columns isMobile>
                            <Column isSize="2" />
                            <Achieve image={Meteor} caption="Meteor" />
                            <Achieve image={Docker} caption="Docker" />
                            <Column isSize="2" />
                        </Columns>
                        <Columns isMobile>
                            <Achieve image={MariaDB}
                                     caption="MySQL / MariaDB" />
                            <Achieve image={ReactNative}
                                     caption="React Native" />
                            <Achieve image={Unity3D}
                                     caption="Unity 3D" />
                        </Columns>
                        <Columns isMobile>
                            <Column isSize="2" />
                            <Achieve image={FSharp}
                                     caption="F# (OCaml + .NET)" />
                            <Achieve image={Cpp} caption="C++ (C++1x)" />
                            <Column isSize="2" />
                        </Columns>
                    </CardContent>
                </Card>
            </Column>
        </Columns>
    </Container>
</div>;
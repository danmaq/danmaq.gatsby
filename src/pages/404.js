'use strict';

import React from 'react';
import Helmet from 'react-helmet';
import {
    Columns,
    Column,
    Container,
    Content,
    Hero,
    HeroBody,
    Image,
    Title,
} from 'bloomer';
import Link from 'gatsby-link';

import Header from '~/src/components/Header';
import NotFound from '~/src/assets/404.png';

export default () =>
<div role="main">
    <Helmet>
        <title>しかし、何も見つからなかった。</title>
    </Helmet>
    <Header />
    <Hero>
        <HeroBody>
            <Container hasTextAlign='centered'>
                <Title isSize={1}>NOT FOUND</Title>
            </Container>
        </HeroBody>
    </Hero>
    <Container role="main">
        <Columns>
            <Column isSize={7}>
                <Image  isRatio="1:1" src={NotFound} />
            </Column>
            <Column isSize={5}>
                <Content isSize="large">
                    <p>
                        <em>ざんねん！</em><wbr />
                        あなたの探していた情報は、どうやらこの場所ではないようです。
                    </p>
                </Content>
                <Content isSize="medium">
                    <p>
                        <Link to="/">トップページ</Link>
                        からもう一度辿り直せば、もしかしたら何かが見つかるかもしれません！
                    </p>
                </Content>
            </Column>
        </Columns>
    </Container>
</div>;
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

import Article from '~/src/components/Article';
import Header from '~/src/components/Header';

import Comiket from '~/src/assets/LP/photo/comiket.jpg';
import Enna from '~/src/assets/LP/photo/enna.jpg';
import ReactNative from '~/src/assets/LP/icon/react.svg';
import Workshop from '~/src/assets/LP/photo/workshop.jpg';

const cards =
    ({ node: { frontmatter: { title, date, strdate }, excerpt } }) =>
    <Article href="blog"
             date={date}
             strDate={strdate}
             caption={title}
             detail={excerpt} />

export default ({ data: { allMarkdownRemark: { totalCount, edges } } }) =>
<div>
    <Helmet>
        <title>Blog</title>
    </Helmet>
    <Header />
    <Hero>
        <HeroBody>
            <Container>
                <Title isSize={2} tag="h1">Blog</Title>
            </Container>
        </HeroBody>
    </Hero>
    <section className="container">
        <p>{totalCount} 件の記事</p>
        <Columns isMultiline>
            {edges.map(Article.create)}
        </Columns>
    </section>
</div>;

export const query =
    graphql `
query AboutQuery {
    allMarkdownRemark(
        sort: {fields: [frontmatter___date], order: DESC},
        limit: 24,
        filter: {frontmatter: {draft: {eq: false}}}
    ) {
        totalCount
        edges {
            node {
                id
                frontmatter {
                    title
                    date: date
                    strdate: date(formatString: "YYYY/M/D")
                }
                excerpt
            }
        }
    }
}`

/*
    <aside className="container">
        投稿日時: <time dateTime="2017-01-23T19:00">2017/1/23 19:00</time>
        &nbsp;<wbr />
        更新日時: <time dateTime="2017-01-23T19:00">2017/1/23 19:00</time>
    </aside>

    <Columns isCentered>
            <Column isHidden="touch" isSize={1} />
            <Column isSize={10}>
                <Content isSize="medium">
                    <p>
                        In the beginning God created the heaven and the earth. And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.
                    </p>
                    <p>
                        The quick brown fox jumps over the lazy dog.
                    </p>
                    <p>
                        寿限無 寿限無 五劫の擦り切れ 海砂利水魚の 水行末 雲来末 風来末 食う寝る処に住む処 藪ら柑子の藪柑子 パイポ パイポ パイポのシューリンガン シューリンガンのグーリンダイ グーリンダイのポンポコピーのポンポコナーの 長久命の長助
                    </p>
                </Content>
            </Column>
            <Column isHidden="touch" isSize={1} />
        </Columns>

            <Hero>
        <HeroBody>
            <Container hasTextAlign='centered'>
                <Title isSize={3} tag="h2">関連記事</Title>
            </Container>
        </HeroBody>
    </Hero>
    <Container>
        <Columns className="is-widescreen">
            <Column>
                <Columns>
                    <Card image={Enna}
                          href="blog"
                          caption="Genesis 1"
                          detail="In the beginning God created the heaven and the earth. And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters." />
                    <Card image={Comiket}
                          href="blog"
                          caption="件名"
                          detail="The quick brown fox jumps over the lazy dog." />
                </Columns>
            </Column>
            <Column>
                <Columns>
                    <Card href="blog"
                          caption="Card"
                          detail="Some quick example text to build on the card title and make up the bulk of the card's content." />
                    <Card image={ReactNative}
                          href="blog"
                          caption="React のやべーやつ"
                          detail="寿限無 寿限無 五劫の擦り切れ 海砂利水魚の 水行末 雲来末 風来末 食う寝る処に住む処 藪ら柑子の藪柑子 パイポ パイポ パイポのシューリンガン シューリンガンのグーリンダイ グーリンダイのポンポコピーのポンポコナーの 長久命の長助" />
                </Columns>
            </Column>
        </Columns>
    </Container>

*/
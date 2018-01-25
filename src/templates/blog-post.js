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
    Title,
} from 'bloomer';

import Article from '~/src/components/Article';
import Header from '~/src/components/Header';

import Comiket from '~/src/assets/LP/photo/comiket.jpg';
import Enna from '~/src/assets/LP/photo/enna.jpg';
import ReactNative from '~/src/assets/LP/icon/react.svg';
import Workshop from '~/src/assets/LP/photo/workshop.jpg';

export default ({
    data: {
        markdownRemark: {
            html,
            frontmatter: { title, date, strDate }
        }
    }
}) =>
<div>
    <Helmet>
        <title>{title}</title>
    </Helmet>
    <Header />
    <Hero>
        <HeroBody>
            <Container>
                <Title isSize={2} tag="h1">{title}</Title>
            </Container>
        </HeroBody>
    </Hero>
    <section className="container">
        <aside className="container">
            投稿日時: <time dateTime={date}>{strDate}</time>
        </aside>
        <Columns isCentered>
            <Column isHidden="touch" isSize={1} />
            <Column isSize={10}>
                <Content isSize="medium">
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </Content>
            </Column>
            <Column isHidden="touch" isSize={1} />
        </Columns>
    </section>
    <Hero>
        <HeroBody>
            <Container hasTextAlign='centered'>
                <Title isSize={3} tag="h2">関連記事</Title>
            </Container>
        </HeroBody>
    </Hero>
    <Container>
        <Columns isMultiline>
            <Article image={Enna}
                     date="2017-12-22T00:00:00+09:00"
                     strDate="2017/12/22"
                     href="blog"
                     caption="Genesis 1"
                     detail="In the beginning God created the heaven and the earth. And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters." />
            <Article image={Comiket}
                     date="2017-12-22T00:00:00+09:00"
                     strDate="2017/12/22"
                     href="blog"
                     caption="件名"
                     detail="The quick brown fox jumps over the lazy dog." />
            <Article href="blog"
                     date="2017-12-22T00:00:00+09:00"
                     strDate="2017/12/22"
                     caption="Card"
                     detail="Some quick example text to build on the card title and make up the bulk of the card's content." />
            <Article image={ReactNative}
                     date="2017-12-22T00:00:00+09:00"
                     strDate="2017/12/22"
                     href="blog"
                     caption="React のやべーやつ"
                     detail="寿限無 寿限無 五劫の擦り切れ 海砂利水魚の 水行末 雲来末 風来末 食う寝る処に住む処 藪ら柑子の藪柑子 パイポ パイポ パイポのシューリンガン シューリンガンのグーリンダイ グーリンダイのポンポコピーのポンポコナーの 長久命の長助" />
        </Columns>
    </Container>
</div>;

export const query =
    graphql `
query post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
            cover {
                childImageSharp {
                    responsiveSizes {
                        src
                        srcSet
                        sizes
                    }
                }
            }
            date: date
            strDate: date(formatString: "YYYY/M/D")
            title
        }
    }
}`;
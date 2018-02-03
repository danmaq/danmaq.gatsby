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
    HeroFooter,
    Title,
} from 'bloomer';
import _ from 'lodash';

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
            frontmatter: { cover, date, strDate, title }
        }
    },
    pathContext,
}) =>
<div>
    <Helmet>
        <title>{title}</title>
    </Helmet>
    <Header pathContext={pathContext} />
    <Hero isSize="medium">
        <HeroBody>
            <Container>
                <Title isSize={2} tag="h1">{title}</Title>
            </Container>
        </HeroBody>
        <HeroFooter>
            <aside className="container">
                投稿日時: <time dateTime={date}>{strDate}</time>
            </aside>
        </HeroFooter>
        </Hero>
    <section className="container">
        <figure className="image">
            <img alt=""
                 sizes={_.get(cover, 'childImageSharp.responsiveSizes.sizes')}
                 src={_.get(cover, 'childImageSharp.responsiveSizes.src')}
                 srcSet={_.get(cover, 'childImageSharp.responsiveSizes.srcSet')} />
        </figure>
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
</div>;

export const query =
    graphql `
query BlogPostByPath($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
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
        fields {
            langKey,
            slug
        }
    }
}`;
'use strict';

import React from 'react';
import Helmet from 'react-helmet';
import { Columns, Container, Hero, HeroBody, Title } from 'bloomer';
import Link from 'gatsby-link';

import Article from '~/src/components/Article';
import Header from '~/src/components/Header';

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
query all {
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC },
        limit: 24,
        filter: { frontmatter: { draft: { eq: false } } }
    ) {
        totalCount
        edges {
            node {
                id
                frontmatter {
                    cover {
                        childImageSharp {
                            responsiveSizes {
                                base64
                                aspectRatio
                                src
                                srcSet
                                sizes
                                originalImg
                                originalName
                            }
                        }
                    }
                    date: date
                    strDate: date(formatString: "YYYY/M/D")
                    title
                }
                fields { slug }
                excerpt
            }
        }
    }
}`;
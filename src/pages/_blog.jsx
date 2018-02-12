'use strict';

import React from 'react';
import Helmet from 'react-helmet';
import { Columns, Container, Hero, HeroBody, Title } from 'bloomer';
import Link from 'gatsby-link';
import i18n from 'i18next';

import Article from '~/src/components/Article';
import Header from '~/src/components/Header';

export default ({
    data: { allMarkdownRemark: { totalCount, edges } },
    pathContext,
}) => {
    i18n.changeLanguage(pathContext.langKey);
    const result =
        <div>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <Header pathContext={pathContext} />
            <Hero isSize="medium">
                <HeroBody>
                    <Container>
                        <Title isSize={2} tag="h1">Blog</Title>
                    </Container>
                </HeroBody>
            </Hero>
            <main>
                <section className="container">
                    <p>{totalCount} 件の記事</p>
                    <Columns isMultiline>
                        {edges.map(Article.create)}
                    </Columns>
                </section>
            </main>
        </div>
    return result;
};
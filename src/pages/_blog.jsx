import React from 'react';
import Helmet from 'react-helmet';
import { Columns, Container, Hero, HeroBody, Title } from 'bloomer';
import i18n from 'i18next';

import Article from '../components/Article';
import Header from '../components/Header';

/** Common component of articles with language independent. */
export default ({
  data: { allMarkdownRemark: { totalCount, edges } },
  pathContext,
}) => {
  i18n.changeLanguage(pathContext.langKey);
  const result = (
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
    </div>);
  return result;
};

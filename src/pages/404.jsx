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

import Header from '../components/Header';
import NotFound from '../assets/404.png';

export default () => (
  <div role="main">
    <Helmet>
      <title>NOT FOUND</title>
    </Helmet>
    <Header />
    <Hero isSize="medium">
      <HeroBody>
        <Container hasTextAlign="centered">
          <Title isSize={1}>NOT FOUND</Title>
        </Container>
      </HeroBody>
    </Hero>
    <Container role="main">
      <Columns>
        <Column isSize={7}>
          <Image isRatio="1:1" src={NotFound} />
        </Column>
        <Column isSize={5}>
          <Content isSize="large">
            <p>
              <em>Oops!</em><wbr />
              The information you were looking for seems to be not this place apparently.
            </p>
          </Content>
          <Content isSize="medium">
            <p>
              If you trace again from the <Link to="/">index page</Link>, you may find something!
            </p>
          </Content>
        </Column>
      </Columns>
    </Container>
  </div>);

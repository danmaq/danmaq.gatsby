import React from 'react';
import i18n from 'i18next';

import LPHeader from '../components/Header/LP';
import About from '../components/LP/About';
import Blog from '../components/LP/Blog';
import Contact from '../components/LP/Contact';
import Hero from '../components/LP/Hero';
import Works from '../components/LP/Works';

/** Top page component of articles with language independent. */
export default ({
  data: { allMarkdownRemark: { edges } },
  pathContext,
}) => {
  i18n.changeLanguage(pathContext.langKey);
  const result = (
    <div id="lp">
      <LPHeader pathContext={pathContext} />
      <Hero />
      <main role="main">
        <Works langKey={pathContext.langKey} />
        <About />
        <Contact />
        <Blog items={edges} langKey={pathContext.langKey} />
      </main>
    </div>);
  return result;
};

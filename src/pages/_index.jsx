import React from 'react';
import i18n from 'i18next';

import LPHeader from '~/src/components/Header/LP';
import About from '~/src/components/LP/About';
import Blog from '~/src/components/LP/Blog';
import Contact from '~/src/components/LP/Contact';
import Hero from '~/src/components/LP/Hero';
import Works from '~/src/components/LP/Works';

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

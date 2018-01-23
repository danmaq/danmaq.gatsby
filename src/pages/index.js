'use strict';

import React from 'react';

import Header from '~/src/components/Header/LP';
import About from '~/src/components/LP/About';
import Blog from '~/src/components/LP/Blog';
import Contact from '~/src/components/LP/Contact';
import Hero from '~/src/components/LP/Hero';
import Works from '~/src/components/LP/Works';

export default ({ data: { allMarkdownRemark: { edges } } }) =>
<div id="lp">
    <Header />
    <Hero />
    <div role="main">
        <Works />
        <About />
        <Contact />
        <Blog items={edges} />
    </div>
</div>;

export const query =
    graphql `
query recent {
    allMarkdownRemark(
        sort: {fields: [frontmatter___date], order: DESC},
        limit: 3,
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
                fields { slug }
                excerpt
            }
        }
    }
}`
'use strict';

import React from 'react';

import Header from '~/src/components/Header/LP';
import About from '~/src/components/LP/About';
import Blog from '~/src/components/LP/Blog';
import Contact from '~/src/components/LP/Contact';
import Hero from '~/src/components/LP/Hero';
import Works from '~/src/components/LP/Works';

export default () =>
<div id="lp" role="main">
    <Header />
    <Hero />
    <Works />
    <About />
    <Contact />
    <Blog />
</div>;
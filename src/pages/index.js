'use strict';

import React from 'react';

import About from '~/src/components/LP/About';
import Blog from '~/src/components/LP/Blog';
import Contact from '~/src/components/LP/Contact';
import Jumbotron from '~/src/components/LP/Jumbotron';
import Works from '~/src/components/LP/Works';

export default () =>
<div id="lp">
    <Jumbotron />
    <Works />
    <About />
    <Contact />
    <Blog />
</div>;
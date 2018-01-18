'use strict';

import React from 'react';
import { Section } from 'bloomer';

import Contact from './Contact';
import EZine from './EZine';
import SNS from './SNS';

export default () =>
<Section id="contact">
    <Contact />
    <EZine />
    <SNS />
</Section>;
'use strict';

import React from 'react';
import { Section } from 'bloomer';

import Depts from './Depts';
import Member from './Member';

export default () =>
<Section id="about">
    <Depts />
    <Member />
</Section>;
'use strict';

import React from 'react';
import { Button, Glyphicon, Jumbotron } from 'react-bootstrap';

export default () =>
<Jumbotron>
    <h1 className="text-center text-white font-weight-light" lang="en">
        Creating, and Sharing.
    </h1>
    <p className="text-center text-light font-weight-light lead">
        “danmaq” は、たった今も明日の “楽しい” を考えています。
    </p>
    <p className="text-center font-weight-light">
        <Button bsStyle="primary" bsSize="large" href="#works">
            <Glyphicon glyph="menu-down" /> もっと見る
        </Button>
    </p>
</Jumbotron>;
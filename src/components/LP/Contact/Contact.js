'use strict';

import React from 'react';
import { Button, Col, Grid, Row } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import Heading from '../Heading';

export default () =>
<div>
    <Heading caption="Contact"
        detail="ご意見は Twitter で受け付けております。下記のボタンを押して、@danmaq を消さずに、ご意見を続けて入れて送信してください。" />
    <Grid>
        <Row>
            <Col className="dmq-contact text-center" sm={6}>
                <Button bsStyle="info"
                        bsSize="large"
                        href="https://twitter.com/intent/tweet?text=Hi%2c%20%40danmaq%20&amp;related=danmaq"
                        target="_blank"
                        block>
                    <FontAwesome name="twitter"
                                 size="2x"
                                 fixedWidth
                                 inverse />
                    アカウントをお持ちの方
                </Button>
            </Col>
            <Col className="dmq-contact text-center" sm={6}>
                <Button bsStyle="default"
                        bsSize="large"
                        href="https://peing.net/danmaq"
                        target="_blank"
                        block>
                    <FontAwesome name="twitter"
                                 size="2x"
                                 fixedWidth />
                    アカウントのない方
                </Button>
            </Col>
        </Row>
    </Grid>
</div>;
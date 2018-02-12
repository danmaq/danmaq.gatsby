'use strict';

import React from 'react';
import { Container, Content, Footer } from 'bloomer';

/** Footer component. */
export default class extends React.Component {
    /** Whether should require redraw. */
    shouldComponentUpdate = () => false;

    /** Create rendered view elements. */
    render =
        () =>
        <Footer role="contentinfo">
            <Container 　hasTextAlign="centered" isFluid>
                <Content>
                    <p>“danmaq” は DAYS PRODUCTION が運営する、同人ブランドです。</p>
                </Content>
                <Content isSize="small">
                    <p>©1999-2018 danmaq / DAYS PRODUCTION</p>
                </Content>
            </Container>
        </Footer>;
};
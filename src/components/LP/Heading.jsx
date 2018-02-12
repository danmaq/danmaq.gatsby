'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Container, Hero, HeroBody, Title } from 'bloomer';

/** Common heading component for LP. */
export default class extends React.Component {
    /** Whether should require redraw. */
    shouldComponentUpdate = () => false;

    /** Create rendered view elements. */
    render =
        () =>
        (({ detail }) =>
            <Hero isSize="medium">
                <HeroBody>
                    <Container hasTextAlign='centered'>
                        {this._caption()}
                        <p className="text-center">{detail}</p>
                    </Container>
                </HeroBody>
            </Hero>
        )(this.props);

    /** Create caption elements. */
    _caption =
        () =>
        (({ caption, sub }) =>
            <Title isSize={2} tag={sub ? 'h3' : 'h2'}>{caption}</Title>
        )(this.props);

    /** Property types. */
    static propTypes = {
        caption: PropTypes.string.isRequired,
        detail: PropTypes.node.isRequired,
        sub: PropTypes.bool,
    };
};
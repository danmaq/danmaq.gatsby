'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Column, Image } from 'bloomer';

/** Common achievement icon component for LP. */
export default class extends React.Component {
    /** Whether should require redraw. */
    shouldComponentUpdate = () => false;

    /** Create rendered view elements. */
    render =
        () =>
        (({ caption, image }) =>
            <Column isSize="1/3">
                <Image isRatio="square"
                       src={image}
                       title={caption} />
            </Column>
        )(this.props);

    /** Property types. */
    static propTypes = {
        caption: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    };
};
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Col, Image } from 'react-bootstrap';

/** Image size. */
const SIZE = 96;

/** Common achievement icon component for LP. */
export default class extends React.Component {
    /** Create rendered view elements. */
    render =
        () =>
        (({ caption, image }) =>
            <Col xs={4}>
                <Image className="dmq-achievement"
                       alt={caption}
                       src={image}
                       title={caption}
                       width={SIZE}
                       height={SIZE}
                       rounded />
            </Col>
        )(this.props);

    /** Property types. */
    static propTypes = {
        caption: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    };
};
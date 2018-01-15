'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

/** Common about component for LP. */
export default class extends React.Component {
    /** Create rendered view elements. */
    render =
        () =>
        (({ caption, children, detail, image, subCaption }) =>
            <Col md={6}>
                <h3>{caption}<small> - {subCaption}</small></h3>
                <p>{detail}</p>
                <img alt="" src={image} width="320" height="240" />
                {children}
            </Col>
        )(this.props);

    /** Property types. */
    static propTypes = {
        caption: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
        detail: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        subCaption: PropTypes.string.isRequired,
    };
};
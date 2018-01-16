'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Col, Image } from 'react-bootstrap';

/** Common about component for LP. */
export default class extends React.Component {
    /** Create rendered view elements. */
    render =
        () =>
        (({ children, detail, image, width, height }) =>
            <Col className="dmq-dept" md={6}>
                {this._caption()}
                <p>{detail}</p>
                <Image alt=""
                       src={image}
                       width={width}
                       height={height}
                       responsive
                       rounded />
                {children}
            </Col>
        )(this.props);

    /** Create caption elements. */
    _caption =
        () =>
        (({ caption, sub, subCaption }) =>
            !sub ? <h3>{caption}<small>{subCaption}</small></h3> :
            <h4 className="h3">{caption}<small>{subCaption}</small></h4>
        )(this.props);

    /** Property types. */
    static propTypes = {
        caption: PropTypes.node.isRequired,
        children: PropTypes.node,
        detail: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        subCaption: PropTypes.string.isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
        sub: PropTypes.bool,
    };

    /** Default Properties. */
    static defaultProps = { width: 320, height: 240 };
};
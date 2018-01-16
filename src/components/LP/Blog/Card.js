'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { Col, Glyphicon, Panel } from 'react-bootstrap';

import Mark from '~/src/assets/logo/mark.svg';

/** Common card component for LP. */
export default class extends React.Component {
    /** Create rendered view elements. */
    render =
        () =>
        (({ caption, detail, href, image }) =>
            <Col md={6} xl={3}>
                <Panel className="dmq-blog">
                    <Panel.Heading style={{ backgroundImage: `url(${image})` }} />
                    <Panel.Body>
                        <h3>{caption}</h3>
                        <p>{detail}</p>
                        <Link className='btn btn-primary' to={href}>
                            <Glyphicon glyph="menu-down" /> もっと見る
                        </Link>
                    </Panel.Body>
                </Panel>
            </Col>
        )(this.props);

    /** Property types. */
    static propTypes = {
        caption: PropTypes.node.isRequired,
        detail: PropTypes.string.isRequired,
        href: PropTypes.string,
        image: PropTypes.string.isRequired,
    };

    /** Default Properties. */
    static defaultProps = { image: Mark };
};
'use strict';

import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';

/** Common work component for LP. */
export default class extends React.Component {
    /** Create rendered view elements. */
    render =
        () =>
        (({ detail, href, hrefCaption, id }) =>
            <Panel id={id}>
                <Panel.Body className="dmq-works" id="ctc">
                    <article>{this._title()}<p>{detail}</p></article>
                    <p>{this._linkButton()}</p>
                </Panel.Body>
            </Panel>
        )(this.props);

    /** Create link elements. */
    _linkButton =
        () =>
        (({ href, hrefCaption }) =>
            /^https?:\/\//.test(href) ?
            <a className='btn btn-lg btn-default'
               href={href}
               role="button"
               target="_blank">
                {hrefCaption}
            </a> :
            <Link className='btn btn-lg btn-primary'
                  to={href}
                  role="button">
                {hrefCaption}
            </Link>
        )(this.props);

    /** Create title elements. */
    _title =
        () =>
        (({ title, subtitle }) =>
            !subtitle ? <h3>{title}</h3> :
            <h3>{title}<br /><small>{subtitle}</small></h3>
        )(this.props);

    /** Property types. */
    static propTypes = {
        detail: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
        hrefCaption: PropTypes.string,
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
    };

    /** Default properties. */
    static defaultProps = { hrefCaption: 'もっと見る' };
};
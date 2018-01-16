'use strict';

import React from 'react';
import PropTypes from 'prop-types';

/** Common heading component for LP. */
export default class extends React.Component {
    /** Create rendered view elements. */
    render =
        () =>
        (({ detail }) =>
            <div className="dmq-subtitle">
                {this._caption()}<p className="text-center">{detail}</p>
            </div>
        )(this.props);

    /** Create caption elements. */
    _caption =
        () =>
        (({ caption, sub }) =>
            sub ? <h3 className="h2 text-center">{caption}</h3> :
            <h2 className="h1 font-weight-light text-center">{caption}</h2>
        )(this.props);

    /** Property types. */
    static propTypes = {
        caption: PropTypes.string.isRequired,
        detail: PropTypes.node.isRequired,
        sub: PropTypes.bool,
    };
};
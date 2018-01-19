'use strict';

import React from 'react';
import PropTypes from 'prop-types';

/**
 * @typedef {object} DMQ.Icon.SizePair
 * @property {string} wrap
 * @property {string} icon
 */

/**
 * Table of size definition.
 * @type {DMQ.Icon.SizePair[]}
 */
const sizeTable = [
    { wrap: 'is-small', icon: '' },
    { wrap: '', icon: 'fa-lg' },
    { wrap: 'is-medium', icon: 'fa-2x' },
    { wrap: 'is-large', icon: 'fa-3x' },
    { wrap: 'is-large', icon: 'fa-4x' },
];

/**
 * Common icon component.
 * 
 * Since `bloomer.Icon` outputs HTML structure different
 * from Bulma's specification, use this alternative class.
 */
export default class extends React.Component {
    /** Create rendered view elements. */
    render =
        () =>
        (({ i, size }, { wrap, icon }) =>
            <span className={`icon ${wrap}`}>
                <i className={`fa fa-${i} ${icon}`}></i>
            </span>
        )(this.props, this._sizeDef());

    /** Get size definition. */
    _sizeDef = () => (({ size }) => sizeTable[size])(this.props);

    /** Property types. */
    static propTypes = {
        i: PropTypes.string.isRequired,
        size: PropTypes.oneOf([0, 1, 2, 3, 4]),
    };

    /** Default properties. */
    static defaultProps = { size: 0 };
};
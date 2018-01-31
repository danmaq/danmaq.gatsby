'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardContent,
    CardHeader,
    CardImage,
    Column,
    Content,
    Image,
    Title,
} from 'bloomer';

/** Common about component for LP. */
export default class extends React.Component {
    /** Whether should require redraw. */
    shouldComponentUpdate = () => false;

    /** Create rendered view elements. */
    render =
        () =>
        (({ children, detail, image }) =>
            <Column>
                <Card className="dmq-dept">
                    <CardHeader>
                        {this._caption()}                            
                    </CardHeader>
                    <CardImage>
                        <Image isRatio="16:9" src={image} />
                    </CardImage>
                    <CardContent>
                        <Content>
                            <p>{detail}</p>
                            {children}
                        </Content>
                    </CardContent>
                </Card>
            </Column>
        )(this.props);

    /** Create caption elements. */
    _caption =
        () =>
        (({ caption, sub, subCaption }) =>
            <Title className="card-header-title" tag={sub ? 'h4' : 'h3'}>
                {caption}<small>&nbsp;{subCaption}</small>
            </Title>
        )(this.props);

    /** Property types. */
    static propTypes = {
        caption: PropTypes.node.isRequired,
        children: PropTypes.node,
        detail: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        subCaption: PropTypes.string.isRequired,
        sub: PropTypes.bool,
    };
};
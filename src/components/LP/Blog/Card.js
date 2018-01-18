'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    CardImage,
    Column,
    Content,
    Image,
    Title,
} from 'bloomer';

import Mark from '~/src/assets/logo/mark.svg';

/** Common card component for LP. */
export default class extends React.Component {
    /** Create rendered view elements. */
    render =
        () =>
        (({ caption, detail, href, image }) =>
            <Column>
                <Card>
                    <CardImage>
                        <Image isRatio="16:9" src={image} />
                    </CardImage>
                    <CardHeader>
                        <Title className="card-header-title" tag="h3">
                            {caption}
                        </Title>
                    </CardHeader>
                    <CardContent>
                        <Content>
                            <p>{detail}</p>
                            <p>
                                <Link className='button is-link'
                                      to={href}
                                      role="link">
                                    もっと見る
                                </Link>
                                &nbsp;2017/1/23 19:00
                            </p>
                        </Content>
                    </CardContent>
                </Card>
            </Column>
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
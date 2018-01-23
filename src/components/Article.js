'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
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

import Mark from '~/src/assets/logo/mark.svg';

/** Common card component for LP. */
export default class Article extends React.Component {
    /** Create rendered view elements. */
    render =
        () =>
        (({ caption, date, detail, href, image, strDate }) =>
            <Column className="is-3 is-3-fullhd is-4-widescreen is-6-desktop is-6-tablet is-12-mobile">
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
                                &nbsp;
                                <time dateTime={date}>{strDate}</time>
                            </p>
                        </Content>
                    </CardContent>
                </Card>
            </Column>
        )(this.props);

    /** Property types. */
    static propTypes = {
        caption: PropTypes.node.isRequired,
        date: PropTypes.string,
        detail: PropTypes.string.isRequired,
        href: PropTypes.string,
        image: PropTypes.string.isRequired,
        strDate: PropTypes.string,
    };

    /** Default Properties. */
    static defaultProps = { image: Mark };

    /** Create an article element. */
    static create =
        ({ node: { frontmatter: { title, date, strdate }, excerpt } }, key) =>
        <Article key={key}
                 href="blog"
                 date={date}
                 strDate={strdate}
                 caption={title}
                 detail={excerpt} />
};
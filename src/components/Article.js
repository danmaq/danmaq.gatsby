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
import _ from 'lodash';

import Mark from '~/src/assets/logo/mark.svg';

const more = 'もっと見る';

/**
 * Create YouTube URL for embed.
 * @param {string} id YouTube video ID.
 */
const youtubeUrl = id => `https://www.youtube.com/embed/${id}?showinfo=0`;

/** Common card component for LP. */
export default class Article extends React.Component {
    /** Whether should require redraw. */
    shouldComponentUpdate = () => false;

    /** Create rendered view elements. */
    render =
        () =>
        (({ caption, date, detail, href, strDate }) =>
            <Column className="is-3 is-3-fullhd is-4-widescreen is-6-desktop is-6-tablet is-12-mobile">
                <Card>
                    <CardImage>
                        <Link to={href}
                              role="link">
                            {this._image()}    
                        </Link>
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
                                    {more}
                                </Link>
                                &nbsp;
                                <time dateTime={date}>{strDate}</time>
                            </p>
                        </Content>
                    </CardContent>
                </Card>
            </Column>
        )(this.props);

    /** Create thumbnail elements. */
    _image =
        () =>
        (({ caption, imageSrc, imageSrcSet, imageSrcSizes, youtube }) =>
            !(youtube || imageSrc) ? undefined :
            <figure className="image is-16by9">
                {
                    youtube ?
                        <iframe src={youtubeUrl(youtube)}
                                allow="encrypted-media"
                                allowFullScreen="allowFullScreen" /> :
                        <img alt={more}
                             sizes={imageSrcSizes}
                             src={imageSrc}
                             srcSet={imageSrcSet}
                             title={caption} />
                }
            </figure>
        )(this.props);

    /** Property types. */
    static propTypes = {
        caption: PropTypes.node.isRequired,
        date: PropTypes.string.isRequired,
        detail: PropTypes.string.isRequired,
        href: PropTypes.string,
        imageSrc: PropTypes.string,
        imageSrcSet: PropTypes.string,
        imageSrcSizes: PropTypes.string,
        strDate: PropTypes.string.isRequired,
        youtube: PropTypes.string,
    };

    /** Default Properties. */
    static defaultProps = { imageSrc: Mark };

    /** Create an article element. */
    static create =
        ({
            node: {
                frontmatter: {
                    cover,
                    date,
                    strDate,
                    title,
                    youtube,
                },
                fields: { slug },
                excerpt,
            },
        }, key) =>
        <Article key={key}
                 href={slug}
                 date={date}
                 imageSrc={_.get(cover, 'childImageSharp.responsiveSizes.src')}
                 imageSrcSet={_.get(cover, 'childImageSharp.responsiveSizes.srcSet')}
                 imageSrcSizes={_.get(cover, 'childImageSharp.responsiveSizes.sizes')}
                 strDate={strDate}
                 caption={title}
                 youtube={youtube}
                 detail={excerpt} />
};
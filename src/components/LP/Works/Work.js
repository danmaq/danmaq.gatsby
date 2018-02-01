'use strict';

import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import {
    Button,
    Card,
    CardContent,
    CardImage,
    Column,
    Content,
} from 'bloomer';

import Icon from '~/src/components/Icon';

/**
 * Create YouTube URL for embed.
 * @param {string} id YouTube video ID.
 */
const youtubeUrl = id => `https://www.youtube.com/embed/${id}?showinfo=0`;

/** Common work component for LP. */
export default class extends React.Component {
    /** Whether should require redraw. */
    shouldComponentUpdate = () => false;

    /** Create rendered view elements. */
    render =
        () =>
        (({ detail, href, hrefCaption, id }) =>
            <Column>
                <Card>
                    {this._thumbnail()}
                    <CardContent>
                        <article>
                            <Content>
                                {this._title()}
                                <p>{detail}</p>
                                <p>{this._linkButton()}</p>
                            </Content>
                        </article>
                    </CardContent>
                </Card>
            </Column>
        )(this.props);

    /** Create thumbnail elements. */
    _thumbnail =
        () =>
        (({ thumbnail, youtube }) =>
            !(youtube || thumbnail) ? undefined :
            <CardImage>
                <figure className="image is-16by9">
                    {
                        thumbnail ? <img alt="" src={thumbnail} /> :
                        <iframe src={youtubeUrl(youtube)}
                                allow="encrypted-media"
                                allowFullScreen="allowFullScreen" />
                    }
                </figure>
            </CardImage>
        )(this.props);

    /** Create link elements. */
    _linkButton =
        () =>
        (({ href, hrefCaption }) =>
            /^https?:\/\//.test(href) ?
            <Button href={href}
                    role="link"
                    target="_blank"
                    isLink
                    isOutlined>
                {hrefCaption}&nbsp;&nbsp;<Icon i='external-link' />
            </Button> :
            <Link className='button is-link' to={href} role="link">
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
        thumbnail: PropTypes.string,
        youtube: PropTypes.string,
    };

    /** Default properties. */
    static defaultProps = { hrefCaption: 'もっと見る' };
};
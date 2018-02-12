'use strict';

import React from 'react';
import { withPrefix } from 'gatsby-link';
import { getUserLangKey } from 'ptz-i18n';
import Helmet from 'react-helmet';
import {
    Columns,
    Column,
    Container,
    Content,
    Hero,
    HeroBody,
    HeroFooter,
    Title,
} from 'bloomer';
import _ from 'lodash';

import Article from '~/src/components/Article';
import Header from '~/src/components/Header';

import Comiket from '~/src/assets/LP/photo/comiket.jpg';
import Enna from '~/src/assets/LP/photo/enna.jpg';
import ReactNative from '~/src/assets/LP/icon/react.svg';
import Workshop from '~/src/assets/LP/photo/workshop.jpg';

/**
 * Create YouTube URL for embed.
 * @param {string} id YouTube video ID.
 */
const youtubeUrl = id => `https://www.youtube.com/embed/${id}?showinfo=0`;

export default class extends React.Component {
    constructor(args) {
        super(args);
        const {
            markdownRemark: { frontmatter: { redirect } },
            site: { siteMetadata: { langKeyDefault, langs } },
        } = args.data;
        if (redirect && typeof window !== 'undefined') {
            const langKey = getUserLangKey(langs, langKeyDefault);
            const dest = withPrefix(redirect.replace('${lang}', langKey));
            window.___history.replace(dest);
        }
    }

    /** Create rendered view elements. */
    render =
        () =>
            (({
                data: {
                    markdownRemark: {
                        html,
                frontmatter: { date, redirect, strDate, title }
                    },
                site: { siteMetadata: { langKeyDefault, langs } },
                },
                pathContext
            }) =>
                <div>
                    <Helmet>
                        <title>{title}</title>
                        {this._alternative()}
                    </Helmet>
                    <Header pathContext={pathContext} />
                    <main>
                        <Hero isSize="medium">
                            <HeroBody>
                                <Container>
                                    <Title isSize={2} tag="h1">
                                        {title}
                                    </Title>
                                </Container>
                            </HeroBody>
                            <HeroFooter>
                                <aside className="container">
                                    投稿日時: <time dateTime={date}>{strDate}</time>
                                </aside>
                            </HeroFooter>
                        </Hero>
                        <section className="container">
                            {this._cover()}
                            <Columns isCentered>
                                <Column isHidden="touch" isSize={1} />
                                <Column isSize={10}>
                                    <Content isSize="medium">
                                        <div dangerouslySetInnerHTML={{ __html: html }} />
                                    </Content>
                                </Column>
                                <Column isHidden="touch" isSize={1} />
                            </Columns>
                        </section>
                    </main>
                </div>
            )(this.props);

    _alternative =
        () =>
            (({
                data: {
                    markdownRemark: { frontmatter: { redirect } },
                site: { siteMetadata: { langs } },
                },
            }) =>
                !redirect ? undefined :
                    langs.map(
                        (v, i) => {
                            console.log(redirect.replace('${lang}', v));
                            const result =
                                <link key={i}
                                    href={redirect.replace('${lang}', v)}
                                    hrefLang={v}
                                    rel="alternate" />;
                            return result;
                        }
                    )
            )(this.props);

    _cover =
        () =>
            (({
                data: {
                    markdownRemark: { frontmatter: { cover, youtube } },
                site: { langKeyDefault, langs }
                },
            }) =>
                youtube ?
                    <figure className="image is-16by9">
                        <iframe className="video"
                            src={youtubeUrl(youtube)}
                            allow="encrypted-media"
                            allowFullScreen="allowFullScreen" />
                    </figure> :
                    cover ?
                        <figure className="image">
                            <img alt=""
                                sizes={_.get(cover, 'childImageSharp.responsiveSizes.sizes')}
                                src={_.get(cover, 'childImageSharp.responsiveSizes.src')}
                                srcSet={_.get(cover, 'childImageSharp.responsiveSizes.srcSet')} />
                        </figure> :
                        undefined
            )(this.props);

}

export const query =
    graphql`
query BlogPostByPath($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
        html
        frontmatter {
            cover {
                childImageSharp {
                    responsiveSizes {
                        src
                        srcSet
                        sizes
                    }
                }
            }
            date: date
            strDate: date(formatString: "YYYY/M/D"),
            redirect,
            title,
            youtube
        }
        fields {
            langKey,
            slug
        }
    },
    site{
        siteMetadata{
            langKeyDefault
            langs
        }
    }
}`;
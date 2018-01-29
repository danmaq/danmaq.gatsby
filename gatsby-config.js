'use strict';

const langKeyDefault = 'ja';

module.exports = {
    pathPrefix: '/danmaq.gatsby',
    plugins: [{
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/danmaq.article/posts/`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [{
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                            linkImagesToOriginal: true,
                        },
                    },
                    'gatsby-remark-copy-linked-files',
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-i18n',
            options: {
                langKeyDefault,
                useLangKeyLayout: false,
                pagesPaths: ['/src/pages', '/danmaq.article/posts/'],
                markdownRemark: {
                    postPage: 'src/templates/blog-post.js',
                    query: '{ allMarkdownRemark { edges { node { fields { slug, langKey } } } } }'
                }
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-react-next',
        'gatsby-plugin-sass',
    ],
    siteMetadata: {
        title: 'danmaq',
        langs: ['ja', 'en'],
        langKeyDefault,
    },
};
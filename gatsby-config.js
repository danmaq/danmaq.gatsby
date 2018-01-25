'use strict';

module.exports = {
    pathPrefix: '/danmaq.gatsby',
    plugins: [{
            resolve: 'gatsby-source-filesystem',
            options: {
                excerpt_separator: '<!-- more -->',
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
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-react-next',
        'gatsby-plugin-sass',
    ],
    siteMetadata: { title: 'danmaq' },
};
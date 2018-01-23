'use strict';

module.exports = {
    pathPrefix: "/danmaq.gatsby",
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-react-next',
        `gatsby-plugin-sass`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/danmaq.article/posts`,
            },
        }
    ],
    siteMetadata: { title: 'danmaq' },
};
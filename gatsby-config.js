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
                name: `src`,
                path: `${__dirname}/src/`,
            },
        }
    ],
    siteMetadata: { title: 'danmaq' },
};
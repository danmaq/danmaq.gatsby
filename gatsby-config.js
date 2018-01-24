'use strict';

module.exports = {
    pathPrefix: '/danmaq.gatsby',
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-react-next',
        'gatsby-plugin-sass',
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                excerpt_separator: `<!-- end -->`,
                name: 'posts',
                path: '${__dirname}/danmaq.article/posts',
            },
        }
    ],
    siteMetadata: { title: 'danmaq' },
};
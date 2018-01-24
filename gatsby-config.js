'use strict';

module.exports = {
    pathPrefix: '/danmaq.gatsby',
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-react-next',
        'gatsby-plugin-sass',
        'gatsby-transformer-remark',
        {
            options: {
                excerpt_separator: `<!-- end -->`,
                name: 'posts',
                path: `${__dirname}/danmaq.article/posts`,
            },
            plugins: [{
                ignoreFileExtensions: [],
                options: { destinationDir: '.' },
                resolve: 'gatsby-remark-copy-linked-files',
            }],
            resolve: 'gatsby-source-filesystem',
        }
    ],
    siteMetadata: { title: 'danmaq' },
};
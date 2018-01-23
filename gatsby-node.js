'use strict';

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages =
    async({ graphql, boundActionCreators: { createPage } }) => {
        const query =
            '{ allMarkdownRemark { edges { node { fields { slug } } } } }';
        (await graphql(query)).data.allMarkdownRemark.edges.forEach(
            ({ node }) =>
            createPage({
                path: node.fields.slug,
                component: path.resolve('./src/templates/blog-post.js'),
                context: { slug: node.fields.slug },
            }));
    };

exports.modifyBabelrc =
    ({ babelrc }) => ({
        ...babelrc,
        plugins: [
            ...babelrc.plugins, [
                'module-resolver', { root: ['.'], alias: { '~': '.' } }
            ]
        ]
    });

exports.onCreateNode =
    ({ node, getNode, boundActionCreators: { createNodeField } }) =>
    node.internal.type !== 'MarkdownRemark' ? undefined :
    createNodeField({
        name: 'slug',
        value: `/blog${createFilePath({ node, getNode })}`,
        node,
    });
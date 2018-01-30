'use strict';

import React from 'react';

import Blog from './_blog';

export default props => <Blog {...props} />;

export const query =
    graphql `
query allEN {
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC },
        limit: 24,
        filter: {
            frontmatter: { draft: { eq: false } },
            fields: { langKey: { regex: "/(en|any)/" } }
        }
    ) {
        totalCount
        edges {
            node {
                id
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
                    strDate: date(formatString: "YYYY/M/D")
                    title
                }
                fields {
                    langKey,
                    slug
                }
                excerpt
            }
        }
    }
}`;
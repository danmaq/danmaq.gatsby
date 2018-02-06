'use strict';

import React from 'react';

import Index from './_index';

export default props => <Index {...props} />;

export const query =
    graphql `
query recentEN {
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC },
        limit: 3,
        filter: {
            frontmatter: {
                draft: { eq: false },
                redirect: { eq: null },
            },
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
                    title,
                    youtube
                }
                fields {
                    langKey,
                    slug
                }
                excerpt
            }
        }
    }
}`
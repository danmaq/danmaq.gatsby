import React from 'react';

import Index from './_index';

/**
 * Query for GraphQL.
 * Since its string is precompiled, you should not include dynamic elements.
 */
export const query = graphql`
query recentJA {
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC },
    limit: 3,
    filter: {
      frontmatter: {
        draft: { eq: false },
        redirect: { eq: null },
      },
      fields: { langKey: { regex: "/(ja|any)/" } }
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
}`;

/** Top page component for Japanese. */
export default props => <Index {...props} />;

import React from 'react';

import Tags from './_index';

/**
 * Query for GraphQL.
 * Since its string is precompiled, you should not include dynamic elements.
 */
export const query = graphql`
query TagsEnQuery {
  allMarkdownRemark(
    limit: 2000
    filter: {
      frontmatter: { draft: { ne: true } } ,
      fields: {
        langKey: { eq: "en" }
      }
    }
  ) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }
}`;

/** Articles component for Japanese. */
export default props => <Tags {...props} />;

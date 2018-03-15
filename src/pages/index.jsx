import React from 'react';
import { withPrefix } from 'gatsby-link';
import { getUserLangKey } from 'ptz-i18n';

/**
 * Redirector for root URL.
 * @extends React.Component
 */
export default class extends React.Component {
  /** Initialize instance. */
  constructor(props) {
    super(props);
    if (typeof window !== 'undefined') { // Skip build, Browsers only
      const { langs, langKeyDefault } = props.data.site.siteMetadata;
      const langKey = getUserLangKey(langs, langKeyDefault);
      /* eslint no-underscore-dangle: 0 */
      window.___history.replace(withPrefix(`/${langKey}/`));
    }
  }

  /** Create rendered view elements. */
  render = () => <div />;
}

/**
 * Query for GraphQL.
 * Since its string is precompiled, you should not include dynamic elements.
 */
export const pageQuery = graphql`
query IndexQuery {
  site{
    siteMetadata{
      langKeyDefault
      langs
    }
  }
}`;

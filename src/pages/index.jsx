import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby-link';
import { getUserLangKey } from 'ptz-i18n';

import '../components/typedef';

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

/**
 * @typedef ResultQL
 * @property {{siteMetadata: SiteMetaData}} site
 */

/**
 * @typedef Props
 * @property {ResultQL} data
 */

/**
 * Redirector for root URL.
 * @extends React.Component<Props>
 */
export default class extends React.Component {
  /** Property types. */
  static propTypes = { data: PropTypes.object.isRequired };

  /**
   * Initialize instance.
   * @param {Props} props
   */
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

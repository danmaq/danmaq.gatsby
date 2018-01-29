'use strict';

import React from 'react';
import { withPrefix } from 'gatsby-link';
import { getUserLangKey } from 'ptz-i18n';

export default class extends React.Component {
    constructor(args) {
        super(args);
        if (typeof window !== 'undefined') { // Skip build, Browsers only
            const { langs, defaultLangKey } = args.data.site.siteMetadata;
            const langKey = getUserLangKey(langs, defaultLangKey);
            window.___history.replace(withPrefix(`/${langKey}/`));
        }
    }

    /** Create rendered view elements. */
    render = () => <div />;
}

export const pageQuery =
    graphql `
query IndexQuery {
    site{
        siteMetadata{
            langKeyDefault
            langs
        }
    }
}
`;
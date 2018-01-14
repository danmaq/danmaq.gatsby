import React from 'react';
import Link from 'gatsby-link';

import logonInv from '../../assets/logo/logoInv.svg';

export default () =>
<div>
    <nav className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
            <img src={logonInv} width="282" height="100" alt="danmaq" />
        </Link>
    </nav>
</div>;
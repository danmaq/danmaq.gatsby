import React from 'react';
import Link from 'gatsby-link';
import { Button } from 'react-bootstrap';

export default () =>
<div>
    <h1>Hello, world</h1>
    <a className="btn btn-primary" href="https://github.com/danmaq/danmaq.gatsby/tree/dev" target="_blank">GitHub</a>
    <p>Welcome to new React site.</p>
    <Link className="btn btn-success" to="/page-2/">Go to page 2</Link>
</div>;
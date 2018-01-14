import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.css';

export default class extends React.Component {
    render =
        () =>
        (({ children }) =>
            <div>
                <Helmet defaultTitle="danmaq" titleTemplate="%s | danmaq">
                    <html lang="ja" />
                    <link rel="author"
                          href="https://twitter.com/danmaq"
                          hrefLang="ja" />
                    <link rel="stylesheet"
                          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css"
                          integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy"
                          crossorigin="anonymous" />
                    <meta name="description"
                          content="danmaq は、東方・ボカロおよびオリジナルを中心に、ゲームなど様々なコンテンツを提供する同人ブランドです。" />
                    <meta name="keywords"
                          content="Touhou CtC, Concealed the Conclusion" />
                </Helmet>
                <Header />
                <div style={{
                    margin: '0 auto',
                    maxWidth: 960,
                    padding: '0px 1.0875rem 1.45rem',
                    paddingTop: 0 }} >
                {children()}
                </div>
            </div>
        )(this.props);

    static propTypes = { children: PropTypes.func };
};
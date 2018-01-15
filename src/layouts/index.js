'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.less';

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
                          href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
                          crossorigin="anonymous" />
                    <link rel="stylesheet"
                          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                          crossorigin="anonymous" />
                    <meta name="description"
                          content="danmaq は、東方・ボカロおよびオリジナルを中心に、ゲームなど様々なコンテンツを提供する同人ブランドです。" />
                    <meta name="keywords"
                          content="Touhou CtC, Concealed the Conclusion, 夢終劇" />
                </Helmet>
                <Header />
                {children()}
            </div>
        )(this.props);

    static propTypes = { children: PropTypes.func };
};
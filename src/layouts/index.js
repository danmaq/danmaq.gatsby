'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'font-awesome/scss/font-awesome.scss';

import Footer from '~/src/components/Footer';
import Header from '~/src/components/Header';
import './index.scss';

export default class extends React.Component {
    render =
        () =>
        (({ children }) =>
            <div id="dmq">
                <Helmet defaultTitle="danmaq" titleTemplate="%s | danmaq">
                    <html lang="ja" />
                    <link rel="author"
                          href="https://twitter.com/danmaq"
                          hrefLang="ja" />
                    <link rel="me"
                          href="https://twitter.com/danmaq"
                          hrefLang="ja" />
                    <meta name="description"
                          content="danmaq は、東方・ボカロおよびオリジナルを中心に、ゲームなど様々なコンテンツを提供する同人ブランドです。" />
                    <meta name="keywords"
                          content="Touhou CtC, Concealed the Conclusion, 夢終劇" />
                </Helmet>
                <Header />
                {children()}
                <Footer />
            </div>
        )(this.props);

    static propTypes = { children: PropTypes.func };
};
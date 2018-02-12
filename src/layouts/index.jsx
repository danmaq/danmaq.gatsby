import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'font-awesome/scss/font-awesome.scss';

import Footer from '~/src/components/Footer';
import '~/src/components/i18n';

import './index.scss';

export default class extends React.PureComponent {
  /** Property types. */
  static propTypes = { children: PropTypes.func.isRequired };

  /** Create rendered view elements. */
  render = () => {
    const { children } = this.props;
    return (
      <div id="dmq">
        <Helmet defaultTitle="danmaq" titleTemplate="%s | danmaq">
          <link
            rel="author"
            href="https://twitter.com/danmaq"
            hrefLang="ja"
          />
          <link
            rel="me"
            href="https://twitter.com/danmaq"
            hrefLang="ja"
          />
          <meta
            name="description"
            content="danmaq は、東方・ボカロおよびオリジナルを中心に、ゲームなど様々なコンテンツを提供する同人ブランドです。 | danmaq is a coterie brand offering various contents such as games, mainly Touhou, Vocaloid and original genre."
          />
          <meta
            name="keywords"
            content="Touhou CtC, Concealed the Conclusion, 夢終劇"
          />
        </Helmet>
        {children()}
        <Footer />
      </div>);
  };
}

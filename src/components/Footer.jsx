import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Container, Content, Footer } from 'bloomer';

/**
 * @typedef Props
 * @property {{(key: string) => string}} t i18n translator.
 */

/**
 * Footer component.
 * @extends React.Component
 */
class SiteFooter extends React.Component {
  /** Property types. */
  static propTypes = { t: PropTypes.func.isRequired };

  /** Whether should require redraw. */
  shouldComponentUpdate = () => false;

  /** Create rendered view elements. */
  render = () => (
    <Footer role="contentinfo">
      <Container hasTextAlign="centered" isFluid>
        <Content>
          <p>“danmaq” は DAYS PRODUCTION が運営する、同人ブランドです。</p>
        </Content>
        <Content isSize="small">
          <p>©1999-2018 danmaq / DAYS PRODUCTION</p>
        </Content>
      </Container>
    </Footer>);
}

export default translate('LP')(SiteFooter);

import React from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18next';

import LPHeader from '../components/Header/LP';
import About from '../components/LP/About';
import Blog from '../components/LP/Blog';
import Contact from '../components/LP/Contact';
import Hero from '../components/LP/Hero';
import Works from '../components/LP/Works';

import * as TypePreset from '../components/TypePreset';
import '../components/typedef';

/**
 * @typedef Props
 * @property {{allMarkdownRemark: AllMarkdownRemark}} data
 * @property {PathContext} pathContext
 */

/**
 * Top page component of articles with language independent.
 * @extends React.Component<Props>
 */
export default class extends React.Component {
  /** Property types. */
  static propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: TypePreset.allMarkdownRemark().isRequired,
    }).isRequired,
    pathContext: TypePreset.pathContext().isRequired,
  };

  /**
   * Initialize instance.
   * @param {Props} props
   */
  constructor(props) {
    super(props);
    i18n.changeLanguage(props.pathContext.langKey);
  }

  /** Whether should require redraw. */
  shouldComponentUpdate = () => false;

  /** Create rendered view elements. */
  render = () => {
    const {
      data: { allMarkdownRemark: { edges } },
      pathContext: { langKey, slug },
    } = this.props;
    return (
      <div id="lp">
        <LPHeader {...{ langKey }} path={slug} />
        <Hero />
        <main role="main">
          <Works {...{ langKey }} />
          <About />
          <Contact />
          <Blog {...{ langKey }} items={edges} />
        </main>
      </div>);
  }
}

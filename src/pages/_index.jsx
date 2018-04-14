import React from 'react';
import PropTypes from 'prop-types';

import LPHeader from '../components/Header/LP';
import About from '../components/LP/About';
import Blog from '../components/LP/Blog';
import Contact from '../components/LP/Contact';
import Hero from '../components/LP/Hero';
import Works from '../components/LP/Works';

import '../components/typedef';

/**
 * @typedef ResultQL
 * @property {{edges: string}} allMarkdownRemark
 */

/**
 * @typedef Props
 * @property {ResultQL} data
 * @property {PathContext} pathContext
 */

/**
 * Top page component of articles with language independent.
 * @extends React.Component<Props>
 */
export default class extends React.Component {
  /** Property types. */
  static propTypes = {
    data: PropTypes.object.isRequired,
    pathContext: PropTypes.object.isRequired,
  };

  /** Whether should require redraw. */
  shouldComponentUpdate = () => false;

  /** Create rendered view elements. */
  render = () => {
    const {
      data: { allMarkdownRemark: { edges } },
      pathContext: { langKey, path },
    } = this.props;
    return (
      <div id="lp">
        <LPHeader {...{ langKey, path }} />
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

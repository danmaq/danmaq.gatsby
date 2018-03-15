import React from 'react';
import { Section } from 'bloomer';

import Contact from './Contact';
import EZine from './EZine';
import SNS from './SNS';

/**
 * Index of contact component.
 * @extends React.Component
 */
export default class extends React.Component {
  /** Whether should require redraw. */
  shouldComponentUpdate = () => false;

  /** Create rendered view elements. */
  render =
    () => (
      <Section id="contact">
        <Contact />
        <EZine />
        <SNS />
      </Section>);
}

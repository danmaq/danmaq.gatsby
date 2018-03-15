import React from 'react';
import { Section } from 'bloomer';

import Depts from './Depts';
import Member from './Member';

/**
 * About component.
 * @extends React.Component
 */
export default class extends React.Component {
  /** Whether should require redraw. */
  shouldComponentUpdate = () => false;

  /** Create rendered view elements. */
  render = () => (
    <Section id="about">
      <Depts />
      <Member />
    </Section>);
}

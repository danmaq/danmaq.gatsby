import React from 'react';
import PropTypes from 'prop-types';
import { Container, Hero, HeroBody, Title } from 'bloomer';

/**
 * Common heading component for LP.
 * @extends React.Component
 */
export default class extends React.Component {
  /** Default properties. */
  static defaultProps = { sub: false };

  /** Property types. */
  static propTypes = {
    caption: PropTypes.string.isRequired,
    detail: PropTypes.node.isRequired,
    sub: PropTypes.bool,
  };

  /** Whether should require redraw. */
  shouldComponentUpdate = () => false;

  /** Create rendered view elements. */
  render = () => {
    const { caption, detail, sub } = this.props;
    return (
      <Hero isSize="medium">
        <HeroBody>
          <Container hasTextAlign="centered">
            <Title isSize={2} tag={sub ? 'h3' : 'h2'}>{caption}</Title>
            <p className="text-center">{detail}</p>
          </Container>
        </HeroBody>
      </Hero>);
  };
}

import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardHeader,
  CardImage,
  Column,
  Content,
  Image,
  Title,
} from 'bloomer';

/**
 * @typedef Props
 * @property {React.ReactNode} caption
 * @property {?React.ReactNode} children
 * @property {React.ReactNode} detail
 * @property {string} image
 * @property {React.ReactNode} subCaption
 * @property {?boolean} sub
 */

/**
 * Common about component for LP.
 * @extends React.Component<Props>
 */
export default class extends React.Component {
  /**
   * Default Properties.
   * @type {Props}
   */
  static defaultProps = { children: null, sub: false };

  /** Property types. */
  static propTypes = {
    caption: PropTypes.node.isRequired,
    children: PropTypes.node,
    detail: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    subCaption: PropTypes.node.isRequired,
    sub: PropTypes.bool,
  };

  /** Whether should require redraw. */
  shouldComponentUpdate = () => false;

  /** Create caption elements. */
  renderCaption = () => {
    const { caption, sub, subCaption } = this.props;
    return (
      <Title className="card-header-title" tag={sub ? 'h4' : 'h3'}>
        {caption}<small>&nbsp;{subCaption}</small>
      </Title>);
  };

  /** Create rendered view elements. */
  render = () => {
    const { children, detail, image } = this.props;
    return (
      <Column>
        <Card className="dmq-dept">
          <CardHeader>
            {this.renderCaption()}
          </CardHeader>
          <CardImage>
            <Image isRatio="4:3" src={image} />
          </CardImage>
          <CardContent>
            <Content>
              <p>{detail}</p>
              {children}
            </Content>
          </CardContent>
        </Card>
      </Column>);
  };
}

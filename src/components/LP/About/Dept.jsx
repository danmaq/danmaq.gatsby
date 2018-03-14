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

/** Common about component for LP. */
export default class extends React.Component {
  /** Default Properties. */
  static defaultProps = { children: null, sub: false };

  /** Property types. */
  static propTypes = {
    caption: PropTypes.node.isRequired,
    children: PropTypes.node,
    detail: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    subCaption: PropTypes.string.isRequired,
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

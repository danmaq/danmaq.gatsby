import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, Column, Title, Tag } from 'bloomer';
import Link from 'gatsby-link';

/**
 * @typedef Props
 * @property {string} [label]
 * @property {string} slug
 * @property {number} totalCount
 */

/**
 * Tag item component for the tags list page.
 * @extends React.Component<Props>
 */
export default class extends React.Component {
  /**
   * Default Properties.
   * @type {Props}
   */
  static defaultProps = { label: '' };

  /** Property types. */
  static propTypes = {
    label: PropTypes.string,
    slug: PropTypes.string.isRequired,
    totalCount: PropTypes.number.isRequired,
  };

  /** Whether should require redraw. */
  shouldComponentUpdate = () => false;

  /** Create rendered view elements. */
  render = () => {
    const { label, slug, totalCount } = this.props;
    return (
      <Column className="is-6-tablet is-12-mobile">
        <Card>
          <CardHeader>
            <Title className="card-header-title" tag="h2">
              <Tag isColor="dark">{totalCount}</Tag>
              &nbsp;
              <Link to={slug}>
                {label || slug}
              </Link>
            </Title>
          </CardHeader>
        </Card>
      </Column>);
  }
}

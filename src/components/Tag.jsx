import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, Column, Title, Tag } from 'bloomer';
import Link from 'gatsby-link';

/**
 * @typedef Props
 * @property {string} fieldValue
 * @property {number} totalCount
 */

/**
 * Tag item component for the tags list page.
 * @extends React.Component<Props>
 */
export default class extends React.Component {
  /** Property types. */
  static propTypes = {
    fieldValue: PropTypes.string.isRequired,
    totalCount: PropTypes.number.isRequired,
  };

  /** Whether should require redraw. */
  shouldComponentUpdate = () => false;

  /** Create rendered view elements. */
  render = () => {
    const { fieldValue, totalCount } = this.props;
    return (
      <Column className="is-6-tablet is-12-mobile">
        <Card>
          <CardHeader>
            <Title className="card-header-title" tag="h2">
              <Tag isColor="dark">{totalCount}</Tag>
              &nbsp;
              <Link to={fieldValue}>
                {fieldValue}
              </Link>
            </Title>
          </CardHeader>
        </Card>
      </Column>);
  }
}

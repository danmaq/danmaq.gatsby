'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { Columns, Content, Section } from 'bloomer';

import Article from '~/src/components/Article';
import Icon from '~/src/components/Icon';

import Heading from './Heading';

export default class extends React.Component {
    render =
        () =>
        (({ items }) =>
            <Section id="blog">
                <Heading caption="Blog"
                        detail={`直近 ${items.length} 件の新着ブログ記事を掲載します。`} />
                <Columns isCentered isMultiline>
                    {items.map(Article.create)}
                </Columns>
                <Content>
                    <Link className='button is-fullwidth is-large is-outlined is-link'
                          to="/blog">
                        <Icon i="angle-down" size={2} />
                        &nbsp;さらに過去のブログ記事も見る
                    </Link>
                </Content>
            </Section>
        )(this.props);

    /** Property types. */
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    };
};
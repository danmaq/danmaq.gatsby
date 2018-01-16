'use strict';

import React from 'react';
import Link from 'gatsby-link';
import { Clearfix, Glyphicon, Grid, Row } from 'react-bootstrap';

import Heading from '../Heading';

import Card from './Card';

import Comiket from '~/src/assets/LP/photo/comiket.jpg';
import Enna from '~/src/assets/LP/photo/enna.jpg';
import ReactNative from '~/src/assets/LP/icon/react.svg';
import Workshop from '~/src/assets/LP/photo/workshop.jpg';

export default () =>
<section id="about" className="container">
    <Heading caption="Blog"
             detail="直近 4 件の新着ブログ記事を掲載します。" />
    <Grid>
        <Row>
            <Card image={Enna}
                  href="/"
                  caption="Genesis 1"
                  detail="In the beginning God created the heaven and the earth. And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters." />
            <Card image={Comiket}
                  href="/"
                  caption="件名"
                  detail="The quick brown fox jumps over the lazy dog." />
            <Clearfix visibleMdBlock visibleLgBlock />
            <Card image={Workshop}
                  href="/"
                  caption="Card"
                  detail="Some quick example text to build on the card title and make up the bulk of the card's content." />
            <Card image={ReactNative}
                  href="/"
                  caption="React のやべーやつ"
                  detail="寿限無、寿限無 五劫の擦り切れ 海砂利水魚の 水行末 雲来末 風来末 食う寝る処に住む処 藪ら柑子の藪柑子 パイポ パイポ パイポのシューリンガン シューリンガンのグーリンダイ グーリンダイのポンポコピーのポンポコナーの 長久命の長助" />
        </Row>
    </Grid>
    <p>
        <Link className='btn btn-lg btn-default btn-block' to="/">
            <Glyphicon glyph="menu-down" /> さらに過去のブログ記事も見る
        </Link>
    </p>
</section>;
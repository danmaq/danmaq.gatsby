'use strict';

import React from 'react';
import { Columns, Container } from 'bloomer';

import Dept from './Dept';
import Heading from '../Heading';

import Comiket from '~/src/assets/LP/photo/comiket.jpg';
import Workshop from '~/src/assets/LP/photo/workshop.jpg';

export default () =>
<div>
    <Heading caption="About"
             detail="私たちは、“創る” と “共有する” に特化した、ゲーム制作サークルです。" />
    <Container>
        <Columns>
            <Dept caption="創る"
                  subCaption=" - Creating"
                  image={Comiket}
                  detail="東方やボカロ、あるいはオリジナルの作品を作っています。作品は Web に随時公開、およびコミックマーケットや同人書店で頒布いたします。">
                <h4>最近の活動記録</h4>
                <ul>
                    <li>2017/12 コミックマーケット93</li>
                    <li>2016/1 デジゲー博SPECIAL in 闘会議2016</li>
                    <li>2015/10 サンシャインクリエイション</li>
                    <li>ほか 20 以上のイベントでの作品頒布活動</li>
                </ul>
            </Dept>
            <Dept caption="共有する"
                  subCaption=" - Sharing"
                  image={Workshop}
                  detail="作品制作のノウハウや世界観、そしてちょっとした制作のための心意気などをあなたに共有します。">
                <p>
                    具体的には、ニコ生などのライブ放送での雑談や制作活動のほか、オフラインでの定期交流会、そして初心者向けのゲームアプリ制作勉強会なども開催しております。
                </p>
            </Dept>
        </Columns>
    </Container>
</div>;
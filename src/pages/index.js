'use strict';

import React from 'react';
import Link from 'gatsby-link';
import { Col, Glyphicon, Grid, Jumbotron, Row } from 'react-bootstrap';

import About from '../components/LP/About';
import Heading from '../components/LP/Heading';
import Work from '../components/LP/Work';

import Comiket from '../assets/photo/comiket.jpg';
import Workshop from '../assets/photo/workshop.jpg';

export default () =>
<div id="lp">
    <Jumbotron>
        <h1 className="text-center text-white font-weight-light" lang="en">
            Creating, and Sharing.
        </h1>
        <p className="text-center text-light font-weight-light lead">
            “danmaq” は、たった今も明日の“楽しい”を考えています。
        </p>
        <p className="text-center font-weight-light">
            <a className="btn btn-primary btn-lg" href="#works">
                <Glyphicon glyph="menu-down" /> Learn more
            </a>
        </p>
    </Jumbotron>
    
    <section id="works" className="container">
        <Heading caption="Works"
                 detail="私たち “danmaq” のこれまでの活動を、4つの作品でご紹介します。" />
        <Work id="ctc"
              href="/"
              title="東方夢終劇"
              subtitle=" - Concealed the Conclusion"
              detail="東方の悲しい物語。避けられぬ幻想郷最期の日を描いた、東方二次創作STG。突然の失踪を遂げた霊夢。幻想郷が徐々に朽ち始めて行く中、魔理沙は霊夢を見つけるため一人飛び立つ。" />
        <Work id="atc"
              href="/"
              title="Answer the Conclusion"
              detail="東方夢終劇の後日譚。幻想郷が消えた後の世界。妖怪たちの奇跡で郷の記憶を宿した少女が、幻想郷のキーとなる人物に出会う。東方×オリジナルなスピンオフ物語。" />
        <Work id="evil"
              href="/"
              title="EVIL MAGIC"
              subtitle=" - 邪の魔術"
              detail="不思議な能力が使える女の子エナとその弟と幼馴染は村の悪ガキ三人組として有名。しかしもっと悪いやつ、領主に幼馴染が攫われてしまい、領主の館でも彼女らが大暴れ！ただの勧善懲悪では終わらない、新感覚のオリジナル ファンタジー！" />
        <Work id="evil"
              href="https://pixiv.me/danmaq"
              hrefCaption="Go to Pixiv"
              title="イラスト活動"
              detail="他にも、東方やVOCALOID、あるいはオリジナルなど様々なジャンルのイラスト制作活動も行なっています。Pixiv で過去のイラストを掲載しています。" />
    </section>
    
    <section id="about" className="container">
        <Heading caption="About"
                 detail="私たちは、“創る” と “共有する” に特化した、ゲーム制作サークルです。" />
        <Grid>
            <Row>
                <About caption="創る"
                       subCaption="Creating"
                       image={Comiket}
                       detail="東方やボカロ、あるいはオリジナルの作品を作っています。作品は Web に随時公開、およびコミックマーケットや同人書店で頒布いたします。">
                    <h4>最近の活動記録</h4>
                    <ul>
                        <li>2017/12 コミックマーケット93</li>
                        <li>2017/8 コミックマーケット92</li>
                        <li>2016/1 デジゲー博SPECIAL in 闘会議2016</li>
                        <li>2015/10 サンシャインクリエイション</li>
                        <li>ほか 20 以上のイベントでの作品頒布活動</li>
                    </ul>
                </About>
                <About caption="共有する"
                       subCaption="Sharing"
                       image={Workshop}
                       detail="作品制作のノウハウや世界観、そしてちょっとした制作のための心意気などをあなたに共有します。">
                    <p>
                        具体的には、ニコ生などのライブ放送での活動のほか、オフラインでの定期交流会、そして初心者向けのゲームアプリ制作勉強会なども開催しております。
                    </p>
                </About>
            </Row>
        </Grid>
        <Heading caption="メンバー紹介"
                 detail="サークル結成以来、プロジェクトごとに都度最高のチームを揃えて、完成したら解散、という形式で活動しています。そのため固定メンバーは “まく” 一人です。"
                 sub />
        <p>TBW</p>
    </section>
    <Link className="btn btn-success" to="/page-2/">Go to page 2</Link>
</div>;
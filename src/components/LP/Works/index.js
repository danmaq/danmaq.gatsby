'use strict';

import React from 'react';

import Heading from '../Heading';
import Work from './Work';

export default () =>
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
</section>;
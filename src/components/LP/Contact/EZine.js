'use strict';

import React from 'react';
import { Button, Content, Control, Field, Input } from 'bloomer';

import Icon from '~/src/components/Icon';
import Heading from '../Heading';

export default () =>
<div>
    <Heading caption="メルマガで最新情報を受け取りましょう"
             detail="“danmaq” 公式メルマガを受け取ると、最新の活動情報はもちろん、作品制作のノウハウや世界観、そしてちょっとした制作のための心意気などがあなたのものとなります。今すぐ下記にあなたのメールアドレスを入れて、送信ボタンを押してください。"
             sub />
    <form action="https://88auto.biz/danmaq/planmail.php"
          method="post">
        <Field hasAddons>
            <Input type="hidden" name="mcode" value="UTF-8" />
            <Input type="hidden" name="pid" value="4" />
            <Input type="hidden" name="spflg" value="1" />
            <Control className="is-expanded">
                <Input type="email"
                       name="email"
                       placeholder="メールアドレスを入れてください"
                       required="required"
                       pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*"
                       isSize="large" />
            </Control>
            <Control>
                <Button isColor="primary" isSize="large">
                    <Icon i="gift" />&nbsp;送信
                </Button>
            </Control>
        </Field>
    </form>
    <aside>
        <Content hasTextAlign="right">
                Powered by <a href="http://autobiz.jp/" target="_blank">AutoBiz <Icon i="external-link" /></a>.
        </Content>
    </aside>
</div>;
'use strict';

import React from 'react';
import {
    Button,
    Col,
    FormControl,
    Glyphicon,
    Grid,
    HelpBlock,
    Row,
} from 'react-bootstrap';

import Heading from '../Heading';

export default () =>
<div>
    <Heading caption="メルマガで最新情報を受け取りましょう"
             detail="“danmaq” 公式メルマガを受け取ると、最新の活動情報はもちろん、作品制作のノウハウや世界観、そしてちょっとした制作のための心意気などがあなたのものとなります。今すぐ下記にあなたのメールアドレスを入れて、送信ボタンを押してください。"
             sub />
    <form action="https://88auto.biz/danmaq/planmail.php"
          method="post">
        <Grid>
            <Row>
                <Col sm={10}>
                    <FormControl name="email"
                                 type="email"
                                 placeholder="メールアドレス"
                                 required="required"
                                 pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*"
                                 bsSize="large" />
                </Col>
                <Col sm={2}>
                    <FormControl name="mcode" type="hidden" value="UTF-8" />
                    <FormControl name="pid" type="hidden" value="4" />
                    <FormControl name="spflg" type="hidden" value="1" />
                    <Button name="sbm"
                            value="登録"
                            type="submit"
                            bsSize="large"
                            bsStyle="primary"
                            block>
                        <Glyphicon glyph="gift" /> 送信
                    </Button>
                </Col>
            </Row>
        </Grid>
        <HelpBlock className="text-right">
            Powered by <a href="http://autobiz.jp/" target="_blank">AutoBiz</a>.
        </HelpBlock>
    </form>
</div>;
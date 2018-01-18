'use strict';

import React from 'react';
import { Button, Columns, Column } from 'bloomer';

import Icon from '~/src/components/Icon';
import Heading from '../Heading';

export default () =>
<div>
    <Heading caption="Contact"
             detail="ご意見は Twitter で受け付けております。下記のボタンを押して、@danmaq を消さずに、ご意見を続けて入れて送信してください。" />
    <Columns>
        <Column>
            <Button href="https://twitter.com/intent/tweet?text=Hi%2c%20%40danmaq%20&amp;related=danmaq"
                    target="_blank"
                    isColor="info"
                    isSize="large"
                    isFullWidth>
                <Icon i="twitter" size={2} />
                &nbsp;アカウントをお持ちの方
                <small>&nbsp;&nbsp;<Icon i="external-link" /></small>
            </Button>
        </Column>
        <Column>
            <Button href="https://peing.net/danmaq"
                    target="_blank"
                    isColor="info"
                    isSize="large"
                    isFullWidth
                    isOutlined>
                <Icon i="twitter" size={2} />
                &nbsp;アカウントのない方
                <small>&nbsp;&nbsp;<Icon i="external-link" /></small>
            </Button>
        </Column>
    </Columns>
</div>;
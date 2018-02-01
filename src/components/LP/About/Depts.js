'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Columns, Container } from 'bloomer';

import Dept from './Dept';
import Heading from '../Heading';

import Comiket from '~/src/assets/LP/photo/comiket.jpg';
import Workshop from '~/src/assets/LP/photo/workshop.jpg';

/** Depts component. */
class Depts extends React.Component {
    /** Whether should require redraw. */
    shouldComponentUpdate = () => false;

    /** Create rendered view elements. */
    render =
        () =>
        (({ t }) =>
            <div>
                <Heading caption={t('aboutHeading')}
                         detail={t('aboutDesc')} />
                <Container>
                    <Columns>
                        <Dept caption={t('aboutCreateCaption')}
                              subCaption={t('aboutCreateSubCaption')}
                              image={Comiket}
                              detail={t('aboutCreateDesc')}>
                            <h4>{t('aboutCreateActivityCaption')}</h4>
                            <ul>
                                <li>{t('aboutCreateActivityItem1')}</li>
                                <li>{t('aboutCreateActivityItem2')}</li>
                                <li>{t('aboutCreateActivityItem3')}</li>
                                <li>{t('aboutCreateActivityItem4')}</li>
                            </ul>
                        </Dept>
                        <Dept caption={t('aboutShareCaption')}
                              subCaption={t('aboutShareSubCaption')}
                              image={Workshop}
                              detail={t('aboutShareDesc')}>
                            <p>{t('aboutShareDetail')}</p>
                        </Dept>
                    </Columns>
                </Container>
            </div>
        )(this.props);

    /** Property types. */
    static propTypes = { t: PropTypes.func.isRequired };
}

export default translate('LP')(Depts);
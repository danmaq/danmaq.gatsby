import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import {
  Card,
  CardHeader,
  CardContent,
  Columns,
  Column,
  Container,
  Content,
  Title,
} from 'bloomer';

import Heading from '../Heading';
import Achieve from './Achieve';
import Dept from './Dept';

import Cpp from '~/src/assets/LP/icon/cc.svg';
import Docker from '~/src/assets/LP/icon/docker.svg';
import FSharp from '~/src/assets/LP/icon/fsharp.svg';
import Meteor from '~/src/assets/LP/icon/meteor.svg';
import MariaDB from '~/src/assets/LP/icon/mariadb.svg';
import ReactNative from '~/src/assets/LP/icon/react.svg';
import Unity3D from '~/src/assets/LP/icon/unity3d.svg';
import Enna from '~/src/assets/LP/photo/enna.jpg';

/** Hi! My name is (who?) */
const myname = <ruby>Mc<rp>(</rp><rt>まく</rt><rp>)</rp></ruby>;

/** Member component. */
class Member extends React.Component {
  /** Property types. */
  static propTypes = { t: PropTypes.func.isRequired };

  /** Whether should require redraw. */
  shouldComponentUpdate = () => false;

  /** Create rendered view elements. */
  render = () => {
    const { t } = this.props;
    return (
      <div>
        <Heading
          caption={t('aboutMembersHeading')}
          detail={t('aboutMembersDesc')}
          sub
        />
        <Container>
          <Columns>
            <Dept
              caption={myname}
              subCaption=" / Shuhei Nomura"
              image={Enna}
              detail={t('aboutMembersProfile1')}
              sub
            >
              <p>
                <em>{t('aboutMembersProfile2')}</em>
              </p>
            </Dept>
            <Column>
              <Card className="dmq-dept">
                <CardHeader>
                  <Title
                    className="card-header-title"
                    tag="h4"
                  >
                    {t('aboutSkillHeading')}
                  </Title>
                </CardHeader>
                <CardContent>
                  <Content>
                    <p>{t('aboutSkillDesc')}</p>
                  </Content>
                  <Columns isMobile>
                    <Column isSize="2" />
                    <Achieve
                      image={Meteor}
                      caption="Meteor"
                    />
                    <Achieve
                      image={Docker}
                      caption="Docker"
                    />
                    <Column isSize="2" />
                  </Columns>
                  <Columns isMobile>
                    <Achieve
                      image={MariaDB}
                      caption="MySQL / MariaDB"
                    />
                    <Achieve
                      image={ReactNative}
                      caption="React Native"
                    />
                    <Achieve
                      image={Unity3D}
                      caption="Unity 3D"
                    />
                  </Columns>
                  <Columns isMobile>
                    <Column isSize="2" />
                    <Achieve
                      image={FSharp}
                      caption="F# (OCaml + .NET)"
                    />
                    <Achieve
                      image={Cpp}
                      caption="C++ (C++1x)"
                    />
                    <Column isSize="2" />
                  </Columns>
                </CardContent>
              </Card>
            </Column>
          </Columns>
        </Container>
      </div>);
  };
}

export default translate('LP')(Member);

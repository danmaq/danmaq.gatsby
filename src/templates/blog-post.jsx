import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby-link';
import { getUserLangKey } from 'ptz-i18n';
import Helmet from 'react-helmet';
import {
  Columns,
  Column,
  Container,
  Content,
  Hero,
  HeroBody,
  HeroFooter,
  Title,
} from 'bloomer';
import _ from 'lodash';

import Header from '../components/Header';
import CoverImage from '../components/CoverImage';

export default class extends React.Component {
  /** Property types. */
  static propTypes = {
    data: PropTypes.object.isRequired,
    pathContext: PropTypes.object.isRequired,
  };

  constructor(args) {
    super(args);
    const {
      markdownRemark: { frontmatter: { redirect } },
      site: { siteMetadata: { langKeyDefault, langs } },
    } = args.data;
    if (redirect && typeof window !== 'undefined') {
      const langKey = getUserLangKey(langs, langKeyDefault);
      const dest = withPrefix(redirect.replace('${lang}', langKey));
      window.___history.replace(dest);
    }
  }

  alternateNavigation =
    () =>
      (({
        data: {
          markdownRemark: { frontmatter: { redirect } },
          site: { siteMetadata: { langs } },
        },
      }) =>
        (!redirect ? undefined :
          langs.map((v, i) => (
            <link
              key={i}
              href={redirect.replace('${lang}', v)}
              hrefLang={v}
              rel="alternate"
            />)))
      )(this.props);

  renderCover = () => {
    const { data: { markdownRemark: { frontmatter: { cover, youtube } } } } = this.props;
    return (<CoverImage
      alt=""
      sizes={_.get(cover, 'childImageSharp.responsiveSizes.sizes')}
      src={_.get(cover, 'childImageSharp.responsiveSizes.src')}
      srcSet={_.get(cover, 'childImageSharp.responsiveSizes.srcSet')}
      youtube={youtube}
    />);
  };

  /** Create rendered view elements. */
  render = () => {
    const {
      data: { markdownRemark: { html, frontmatter: { date, strDate, title } } },
      pathContext,
    } = this.props;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          {this.alternateNavigation()}
        </Helmet>
        <Header pathContext={pathContext} />
        <main>
          <Hero isSize="medium">
            <HeroBody>
              <Container>
                <Title isSize={2} tag="h1">
                  {title}
                </Title>
              </Container>
            </HeroBody>
            <HeroFooter>
              <aside className="container">
                投稿日時: <time dateTime={date}>{strDate}</time>
              </aside>
            </HeroFooter>
          </Hero>
          <section className="container">
            {this.renderCover()}
            <Columns isCentered>
              <Column isHidden="touch" isSize={1} />
              <Column isSize={10}>
                <Content isSize="medium">
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </Content>
              </Column>
              <Column isHidden="touch" isSize={1} />
            </Columns>
          </section>
        </main>
      </div>);
  };
}

export const query =
  graphql`
query BlogPostByPath($path: String!) {
  markdownRemark(fields: { slug: { eq: $path } }) {
    html
    frontmatter {
      cover {
        childImageSharp {
          responsiveSizes {
            src
            srcSet
            sizes
          }
        }
      }
      date: date
      strDate: date(formatString: "YYYY/M/D"),
      redirect,
      title,
      youtube
    }
    fields {
      langKey,
      slug
    }
  },
  site{
    siteMetadata{
      langKeyDefault
      langs
    }
  }
}`;

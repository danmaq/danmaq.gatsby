const langKeyDefault = 'ja';
const query =
  `
{
  allMarkdownRemark(filter: { frontmatter: { draft: { eq: false } } }) {
    edges {
      node {
        fields { slug, langKey }
        frontmatter { tags }
      }
    }
  }
}
`;

module.exports = {
  pathPrefix: '/danmaq.gatsby',
  plugins: [{
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'posts',
      path: `${__dirname}/danmaq.article/posts/`,
    },
  },
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-link-rewrite',
          options: {
            pattern: /^\/posts\/(.*)\.(\w{2}).md(#.*)?$/,
            replace: '/$2/$1$3/',
          },
        },
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 590,
            linkImagesToOriginal: true,
          },
        },
        'gatsby-remark-copy-linked-files',
      ],
    },
  },
  {
    resolve: 'gatsby-plugin-i18n',
    options: {
      langKeyDefault,
      useLangKeyLayout: false,
      pagesPaths: ['/src/pages', '/danmaq.article/posts/'],
      markdownRemark: {
        postPage: 'src/templates/blog-post.jsx',
        query,
      },
    },
  },
  {
    resolve: 'gatsby-plugin-i18n-tags',
    options: {
      pagesPaths: ['/danmaq.article/posts/'],
      tagPage: 'src/templates/tag-page.jsx',
      tagsUrl: '/tag/',
      query,
    },
  },
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-react-next',
  'gatsby-plugin-sass',
  ],
  siteMetadata: {
    langs: ['ja', 'en'],
    langKeyDefault,
  },
};

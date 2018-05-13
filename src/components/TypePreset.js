import PropTypes from 'prop-types';

export const responsiveSizes = () => PropTypes.shape({
  sizes: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string.isRequired,
});

export const frontmatter = () => PropTypes.shape({
  cover: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      responsiveSizes: responsiveSizes().isRequired,
    }).isRequired,
  }),
  date: PropTypes.string.isRequired,
  redirect: PropTypes.string,
  strDate: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  youtube: PropTypes.string,
});

export const pathContext = () => PropTypes.shape({
  langKey: PropTypes.string.isRequired,
  path: PropTypes.string,
  slug: PropTypes.string,
  tag: PropTypes.string,
});

export const siteMetadata = () => PropTypes.shape({
  langKeyDefault: PropTypes.string.isRequired,
  langs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
});

export const edges = () => PropTypes.arrayOf(PropTypes.shape({
  node: PropTypes.shape({
    excerpt: PropTypes.string.isRequired,
    fields: PropTypes.shape({
      langKey: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
    frontmatter: frontmatter().isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
}).isRequired);

export const allMarkdownRemark = () => PropTypes.shape({
  edges: edges().isRequired,
  totalCount: PropTypes.number.isRequired,
});

export const tagItem = () => PropTypes.shape({
  fieldValue: PropTypes.string.isRequired,
  totalCount: PropTypes.number.isRequired,
});

export const tagsAllMarkdownRemark = () => PropTypes.shape({
  group: PropTypes.arrayOf(tagItem().isRequired).isRequired,
});

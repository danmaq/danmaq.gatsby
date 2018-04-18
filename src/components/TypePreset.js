import PropTypes from 'prop-types';

export const responsiveSizes = () => PropTypes.shape({
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string.isRequired,
  sizes: PropTypes.string.isRequired,
});

export const frontmatter = () => PropTypes.shape({
  cover: PropTypes.shape({}).isRequired,
  date: PropTypes.string.isRequired,
  strDate: PropTypes.string.isRequired,
  redirect: PropTypes.string,
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

export const allMarkdownRemark = () => PropTypes.shape({
  edges: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      id: PropTypes.string.isRequired,
      frontmatter: frontmatter().isRequired,
      date: PropTypes.instanceOf(Date),
      strDate: PropTypes.string,
      title: PropTypes.string.isRequired,
      youtube: PropTypes.string,
    }).isRequired,
  }).isRequired).isRequired,
  totalCount: PropTypes.number.isRequired,
});

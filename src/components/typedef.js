/**
 * @typedef ResponsiveSizes
 * @property {string} sizes
 * @property {string} src
 * @property {string} srcSet
 */

/**
 * @typedef FrontMatter
 * @property {{childImageSharp: {responsiveSizes: ResponsiveSizes}}} cover
 * @property {string} date
 * @property {string} [redirect]
 * @property {string} strDate
 * @property {string[]} [tags]
 * @property {string} title
 * @property {string} [youtube]
 */

/**
 * @typedef PathContext
 * @property {string} langKey
 * @property {string} [path]
 * @property {string} [slug]
 * @property {string} [tag]
 */

/**
 * @typedef SiteMetaData
 * @property {string} langKeyDefault
 * @property {string[]} langs
 */

/**
 * @typedef QLNode
 * @property {string} excerpt
 * @property {FrontMatter} frontmatter
 * @property {{langKey: string, slug: string}} fields
 * @property {string} id
 */

/**
 * @typedef AllMarkdownRemark
 * @property {{node: QLNode}[]} edges
 * @property {{langKey: string, slug: string}} fields
 * @property {number} totalCount
 */

/**
 * @typedef TagItem
 * @property {string} fieldValue
 * @property {number} totalCount
 */

/**
 * @typedef TagsAllMarkdownRemark
 * @property {TagItem[]} group
 */

const visit = require('unist-util-visit');

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'link', (node) => {
    if (
      node.url &&
      !node.url.startsWith('//') &&
      !node.url.startsWith('http') &&
      node.url.startsWith('/')
    ) {
      node.url = node.url.replace(/(.*)\.(\w{2}).md(#.*)?$/, (match, base, language, hash) => `/${language}${base}${hash}`);
    }
  });

  return markdownAST;
};

const path = require('path');
const fs = require('fs-extra');

exports.modifyBabelrc = ({ babelrc }) => ({
  ...babelrc,
  plugins: [...babelrc.plugins, 'transform-regenerator'],
});

const copyLocaleData = () =>
  fs.copySync(
    path.join(__dirname, '/src/locales'),
    path.join(__dirname, '/public/locales'),
  );

exports.onPostBootstrap = copyLocaleData;
exports.onPostBuild = copyLocaleData;

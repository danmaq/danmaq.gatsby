'use strict';

const path = require('path')
const fs = require('fs-extra');

exports.modifyBabelrc =
    ({ babelrc }) => ({
        ...babelrc,
        plugins: [
            ...babelrc.plugins,
            'transform-regenerator', [
                'module-resolver', { root: ['.'], alias: { '~': '.' } }
            ]
        ]
    });

exports.onPostBootstrap = exports.onPostBuild = () =>
    fs.copySync(
        path.join(__dirname, '/src/locales'),
        path.join(__dirname, '/public/locales'));
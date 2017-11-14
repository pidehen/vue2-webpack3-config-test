/**
 * webpack基础配置和针对不同环境的
 */

import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
const isPro = process.env.NODE_ENV === 'production';

const cssLang = [
  {
    name: 'css',
    exp: /\.css$/i,
    loader: 'css-loader'
  }
];

function generateLoader (name, loader) {
  let loaders = ['css-loader'];

  if (name !== 'css') {
    loaders.push(loader);
  }

  if (isPro) {
    loaders = ExtractTextPlugin.extract({
      use: loaders
    });
  } else {
    // 开发环境下，需要将.vue文件中的style提取到head标签里
    loaders.unshift('vue-style-loader');
  }

  return loaders;
}

export function resolve (...paths) {
  return path.resolve.apply(path, [ __dirname ].concat(paths))
}

export function generateEntry (entry, port) {
  return isPro
    ? entry
    : [
      `webpack-dev-server/client?http://localhost:${ port }/`,
      `webpack/hot/dev-server`
    ].concat(Array.isArray(entry) ? entry : [ entry ])
}

export function styleLoaders () {
  const output = [];

  cssLang.forEach(({ name, exp, loader }) =>
    output.push({
      test: exp,
      use: generateLoader(name, loader)
    })
  );

  return output;
}

export function vueLoaderOptions () {
  const options = {
    loaders: {}
  };

  cssLang.forEach(({ name, _, loader }) =>
    options.loaders[ name ] = generateLoader(name, loader)
  );

  return options;
}

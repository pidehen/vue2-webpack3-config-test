/**
 * 启动webpack开发环境
 */
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import opn from 'opn';
import webpackDevConf from './webpack.dev.conf';
import config from './config';

const compiler = webpack(webpackDevConf);
const server = new WebpackDevServer(compiler, {
  // 热重载，自动刷新
  hot: true,
  publicPath: config.dev.outputPublicPath,
  stats: {
    colors: true
  }
});

// 监听端口，启动服务器
server.listen(config.dev.port, () => console.log(`${ config.dev.port } 已经启动`));

// 启动完毕后，使用opn库打开浏览器
server.middleware.waitUntilValid(() => opn(`http://localhost:${ config.dev.port }/`));

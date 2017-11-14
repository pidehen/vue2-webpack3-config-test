/**
 * 不同webpack环境的配置参数
 */
import { resolve } from './util';

export default {

  dev: {
    outputPath: resolve('..', 'static'),
    outputPublicPath: '/',
    port: 7878
  },

  prod: {
    outputPath: resolve('..', 'static'),
    outputPublicPath: '/static/'
  }

};

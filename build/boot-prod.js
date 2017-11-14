import webpack from 'webpack';
import prodConf from './webpack.prod.conf';

webpack(prodConf, (err, stats) =>
  process.stdout.write(stats.toString())
);

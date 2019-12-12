const path = require('path');
module.exports = {
  outputDir: 'lib',
  productionSourceMap: false,
  configureWebpack: {
    entry: {
      app: ['./src/index.js']
    },
    output: {
      filename: 'ideal-ui.common.js',
      chunkFilename: '[id].js',
      libraryExport: 'default',
      library: 'IDEAL',
      libraryTarget: 'commonjs2'
    }
  }
};

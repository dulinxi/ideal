const path = require('path');
module.exports = {
  productionSourceMap: false,
  pages: {
    index: {
      entry: './examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  }
};

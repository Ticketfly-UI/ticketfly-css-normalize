/* global module */
module.exports = {
  input: 'index.css',
  output: 'build/ticketfly-css-normalize.css',

  use: [
    'postcss-cssnext'
  ]
};

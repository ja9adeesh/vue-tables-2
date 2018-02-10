'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (column) {
  var c = this.opts.columnsClasses;

  return c.hasOwnProperty(column) ? c[column] : '';
};

module.exports = exports['default'];
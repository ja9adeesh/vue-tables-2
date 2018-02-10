"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (column) {
  return this.query.hasOwnProperty(column) && this.opts.listColumns.hasOwnProperty(column);
};

module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return this.opts.filterByColumn ? JSON.stringify(this.query) : this.query;
};

module.exports = exports["default"];
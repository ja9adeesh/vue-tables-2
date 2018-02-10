"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return this.opts.filterable && this.opts.filterable.length ? this.opts.filterable : this.Columns;
};

module.exports = exports["default"];
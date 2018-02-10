"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return this.hasChildRow ? this.allColumns.length + 1 : this.allColumns.length;
};

module.exports = exports["default"];
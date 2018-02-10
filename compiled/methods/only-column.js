"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (column) {
  return this.userColumnsDisplay.length === 1 && this.userColumnsDisplay[0] === column;
};

module.exports = exports["default"];
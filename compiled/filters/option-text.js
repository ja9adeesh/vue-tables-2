'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value, column) {
  var list = this.listColumnsObject[column];

  if (typeof list[value] === 'undefined') {
    return value;
  }

  return list[value];
};

module.exports = exports['default'];
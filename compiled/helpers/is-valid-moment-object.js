'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (val) {
  return val && typeof val.isValid === 'function' && val.isValid();
};

module.exports = exports['default'];
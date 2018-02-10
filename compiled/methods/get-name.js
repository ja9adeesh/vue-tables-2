'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  if (!name) {
    return name;
  }

  name = name.split('__');
  name.shift();

  return name.join('__');
};

module.exports = exports['default'];
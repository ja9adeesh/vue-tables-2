'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  if (typeof localStorage === 'undefined') {
    return {};
  }

  return this.opts.storage === 'local' ? localStorage : sessionStorage;
};

module.exports = exports['default'];
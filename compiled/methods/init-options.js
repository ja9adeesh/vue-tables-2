'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _merge = require('merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (defaults, globalOptions, localOptions) {
  if (globalOptions) {
    defaults = _merge2.default.recursive(defaults, globalOptions);
  }

  localOptions = _merge2.default.recursive(defaults, localOptions);

  return localOptions;
};

module.exports = exports['default'];
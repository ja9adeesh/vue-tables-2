'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var defaults = (0, _defaults2.default)();
  return this.initOptions(defaults, this.globalOptions, this.options);
};

var _defaults = require('../config/defaults');

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];
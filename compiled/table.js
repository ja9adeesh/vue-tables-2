'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methods = require('./mixins/methods');

var _methods2 = _interopRequireDefault(_methods);

var _computed = require('./mixins/computed');

var _computed2 = _interopRequireDefault(_computed);

var _directives = require('./mixins/directives');

var _directives2 = _interopRequireDefault(_directives);

var _beforeDestroy = require('./mixins/before-destroy');

var _beforeDestroy2 = _interopRequireDefault(_beforeDestroy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return { methods: _methods2.default, computed: _computed2.default, directives: _directives2.default, beforeDestroy: _beforeDestroy2.default };
};

module.exports = exports['default'];
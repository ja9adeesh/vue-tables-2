'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('../directives/input');

var _input2 = _interopRequireDefault(_input);

var _select = require('../directives/select');

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  input: _input2.default,
  select: _select2.default
};
module.exports = exports['default'];
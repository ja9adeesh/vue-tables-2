'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function () {
  var opts = this.opts;

  return opts.dateColumns.length && opts.filterByColumn && (typeof opts.filterable === 'boolean' && opts.filterable || _typeof(opts.filterable) === 'object' && (0, _arrayIntersection2.default)(opts.filterable, opts.dateColumns).length);
};

var _arrayIntersection = require('array-intersection');

var _arrayIntersection2 = _interopRequireDefault(_arrayIntersection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];
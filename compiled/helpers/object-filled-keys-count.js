'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (obj) {
  var count = 0;
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      var isDateRange = _typeof(obj[prop]) === 'object';
      if (isDateRange || obj[prop] && (!isNaN(obj[prop]) || obj[prop].trim())) {
        count++;
      }
    }
  }
  return count;
};

module.exports = exports['default'];
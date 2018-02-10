'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function () {
  var init = this.opts.initFilters;

  if (!this.opts.filterByColumn) {
    return init.hasOwnProperty('GENERIC') ? init.GENERIC : '';
  }

  var query = {};

  var filterable = this.opts.filterable && _typeof(this.opts.filterable) === 'object' ? this.opts.filterable : this.columns;

  filterable.forEach(function (column) {
    query[column] = getInitialValue(init, column);
  });

  return query;
};

function getInitialValue(init, column) {
  if (!init.hasOwnProperty(column)) {
    return '';
  }

  if (typeof init[column].start === 'undefined') {
    return init[column];
  }

  return {
    start: init[column].start.format('YYYY-MM-DD HH:mm:ss'),
    end: init[column].end.format('YYYY-MM-DD HH:mm:ss')
  };
}
module.exports = exports['default'];
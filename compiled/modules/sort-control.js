'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (h, right) {
  return function (column) {
    if (!this.sortable(column)) {
      return '';
    }
    return h('span', {
      'class': 'vue-table-sort-icon ' + right + ' ' + this.sortableChevronClass(column) });
  };
};

module.exports = exports['default'];
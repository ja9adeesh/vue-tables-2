'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (column) {
  var c = this.sortable(column) ? 'vue-table-sortable ' : '';

  c += this.columnClass(column);

  return c;
};

module.exports = exports['default'];
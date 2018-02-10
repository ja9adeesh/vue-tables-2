'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rowId) {
  return this.openChildRows.includes(rowId) ? 'vue-table-child-row-toggler--open' : 'vue-table-child-row-toggler--closed';
};

module.exports = exports['default'];
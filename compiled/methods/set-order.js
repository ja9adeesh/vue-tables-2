'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (column, ascending) {
  this.orderBy.column = column;
  this.orderBy.ascending = ascending;

  this.updateState('orderBy', { column: column, ascending: ascending });

  if (this.source === 'server') {
    this.getData();
  }
};

module.exports = exports['default'];
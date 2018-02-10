'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (column) {
  var ascending = this.orderBy.ascending;

  this.currentlySorting = {
    column: column,
    ascending: ascending
  };

  if (typeof this.opts.customSorting[column] === 'undefined') {
    return this.defaultSort(column, ascending);
  }

  return this.opts.customSorting[column](ascending);
};

module.exports = exports['default'];